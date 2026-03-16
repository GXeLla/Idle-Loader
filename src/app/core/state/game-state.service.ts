import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WORLDS } from '../config/worlds.config';

export interface Spinner {
  name: string;
  amount: number;
  active: boolean;
  minTime: number;
  maxTime: number;
  currencyProduced: string;
  costCurrency: string;
  timer: number;
  basePrice: number;
  priceMultiplier: number;
  unlockAfter?: string;
  colorClass: string;
  priceIncrement: number;
}

export interface Player {
  currencies: Record<string, number>;
  spinners: Spinner[];
}

@Injectable({ providedIn: 'root' })
export class GameStateService {
  // Map of all player data per world
  public players: Record<string, Player> = {};

  public _player = new BehaviorSubject<Player>({ currencies: {}, spinners: [] });
  public player$ = this._player.asObservable();

  get player() {
    return this._player.value;
  }

  public lastVisitedWorld?: string;
  offlineRewards: Record<string, number> = {};
  private _hasAscended = false;

  constructor() {}

  /** Load a player for a specific world */
  loadPlayer(worldId: string, player: Player) {
    if (!player || !player.spinners || !player.currencies) {
      console.warn(`Invalid player data for world ${worldId}, initializing`);
      this.initCurrentWorld(worldId);
      return;
    }
    this.players[worldId] = player;
    if (this.lastVisitedWorld === worldId) {
      this._player.next(player);
    }
  }

  /** Add currency safely */
  addCurrency(type: string, amount: number) {
    const p = this.player;
    const newCurrencies = { ...p.currencies, [type]: (p.currencies[type] || 0) + amount };
    newCurrencies[type] = parseFloat(newCurrencies[type].toFixed(2));
    this._player.next({ spinners: p.spinners, currencies: newCurrencies });
    // Update per-world player
    if (this.lastVisitedWorld) this.players[this.lastVisitedWorld] = this._player.value;
  }

  /** Coin gain formula */
  spinnerGain(sp: Spinner): number {
    return 0.05 * Math.pow(sp.amount, 1.08);
  }

  /** Initialize a world and mark as last visited */
  initCurrentWorld(worldId: string) {
    if (!this.players[worldId]) {
      const worldConfig = WORLDS.find(w => w.id === worldId);
      if (!worldConfig) throw new Error(`World not found: ${worldId}`);

      const spinners: Spinner[] = worldConfig.currencies.map((c, i) => ({
        name: `${worldId}_loader${i + 1}`,
        amount: 0,
        active: false,
        minTime: 2000,
        maxTime: 5000,
        currencyProduced: `${worldId}_${c}`,
        costCurrency: `${worldId}_${c}`,
        timer: 0,
        basePrice: worldConfig.basePrice,
        priceIncrement: worldConfig.baseIncrement + Math.sqrt(i) * 0.01,
        priceMultiplier: 1.01,
        unlockAfter: i === 0 ? undefined : `${worldId}_loader${i}`,
        colorClass: `loader${i + 1}`,
      }));

      const currencies: Record<string, number> = {};
      worldConfig.currencies.forEach(c => currencies[`${worldId}_${c}`] = 0);

      this.players[worldId] = { spinners, currencies };
    }

    this.lastVisitedWorld = worldId;
    this._player.next(this.players[worldId]);
  }

  /** Buy spinner logic */
  buySpinner(index: number, qty: number = 1) {
    const p = this.player;
    const sp = p.spinners[index];
    if (!sp) return;

    if (sp.unlockAfter) {
      const prev = p.spinners.find(s => s.name === sp.unlockAfter);
      if (!prev || !prev.active) return;
    }

    let affordableQty = 0;
    let totalCost = 0;

    for (let i = 1; i <= qty; i++) {
      const isFirstFree = index === 0 && sp.amount === 0 && i === 1;
      const cost = isFirstFree ? 0 : sp.basePrice + sp.priceIncrement * (sp.amount + i - 1);
      if ((p.currencies[sp.costCurrency] || 0) >= totalCost + cost) {
        totalCost += cost;
        affordableQty++;
      } else break;
    }

    if (affordableQty === 0) return;

    const newCurrencies = {
      ...p.currencies,
      [sp.costCurrency]: parseFloat(((p.currencies[sp.costCurrency] || 0) - totalCost).toFixed(2)),
    };

    const newSpinners = [...p.spinners];
    newSpinners[index] = {
      ...sp,
      amount: sp.amount + affordableQty,
      active: true,
      timer: sp.timer > 0 ? sp.timer : sp.minTime + Math.random() * (sp.maxTime - sp.minTime),
    };

    const updatedPlayer = { spinners: newSpinners, currencies: newCurrencies };
    this._player.next(updatedPlayer);

    // Update per-world player
    if (this.lastVisitedWorld) this.players[this.lastVisitedWorld] = updatedPlayer;
  }

  /** Update last visited world */
  setVisitedWorld(worldId: string) {
    if (this.getUnlockedWorlds().includes(worldId)) {
      this.lastVisitedWorld = worldId;
      if (this.players[worldId]) this._player.next(this.players[worldId]);
    }
  }

  getVisitedWorld(): string {
    return this.lastVisitedWorld || 'classic';
  }

  /** Max affordable qty */
  getMaxAffordableQty(index: number): number {
    const sp = this.player.spinners[index];
    if (!sp) return 0;

    const available = this.player.currencies[sp.costCurrency] || 0;
    let qty = 0,
      total = 0;
    while (true) {
      const isFirstFree = index === 0 && sp.amount === 0 && qty === 0;
      const cost = isFirstFree ? 0 : sp.basePrice + sp.priceIncrement * (sp.amount + qty);
      if (total + cost <= available) {
        total += cost;
        qty++;
      } else break;
    }
    return qty;
  }

  /** Total cost for qty */
  getSpinnerCost(index: number, qty: number): number {
    const sp = this.player.spinners[index];
    if (!sp) return 0;

    let total = 0;
    for (let i = 1; i <= qty; i++) {
      const isFirstFree = index === 0 && sp.amount === 0 && i === 1;
      total += isFirstFree ? 0 : sp.basePrice + sp.priceIncrement * (sp.amount + i - 1);
    }
    return parseFloat(total.toFixed(2));
  }

  /** Tick timers */
  tickTimers(deltaMs: number) {
    const p = this.player;
    const newSpinners = [...p.spinners];
    const newCurrencies = { ...p.currencies };

    newSpinners.forEach(sp => {
      if (!sp.active) return;
      sp.timer -= deltaMs;

      while (sp.timer <= 0) {
        newCurrencies[sp.currencyProduced] =
          (newCurrencies[sp.currencyProduced] || 0) + this.spinnerGain(sp);
        sp.timer += sp.minTime + Math.random() * (sp.maxTime - sp.minTime);
      }

      if (sp.timer < 0) sp.timer = 0;
    });

    const updatedPlayer = { spinners: newSpinners, currencies: newCurrencies };
    this._player.next(updatedPlayer);

    // Update per-world player
    if (this.lastVisitedWorld) this.players[this.lastVisitedWorld] = updatedPlayer;
  }

  /** ================= Ascend System ================= */
  get hasAscended(): boolean {
    return this._hasAscended;
  }

  getAscendCost(): { currency: string; amount: number } {
    const firstWorld = WORLDS[0];
    const lastCurrency = firstWorld.currencies[firstWorld.currencies.length - 1];
    return { currency: `${firstWorld.id}_${lastCurrency}`, amount: 200 };
  }

  canAscend(): boolean {
    const { currency, amount } = this.getAscendCost();
    return (this.player.currencies[currency] || 0) >= amount;
  }

  ascend(): boolean {
    if (!this.canAscend() || this._hasAscended) return false;

    const { currency, amount } = this.getAscendCost();
    const newCurrencies = { ...this.player.currencies };
    newCurrencies[currency] -= amount;

    WORLDS.forEach(w => this.unlockWorld(w.id));

    this._hasAscended = true;
    this._player.next({ spinners: this.player.spinners, currencies: newCurrencies });

    if (this.lastVisitedWorld) this.players[this.lastVisitedWorld] = this._player.value;

    return true;
  }

  /** Return all unlocked worlds */
  getUnlockedWorlds(): string[] {
    return WORLDS.map(w => w.id);
  }

  unlockWorld(worldId: string) {
    if (!WORLDS.find(w => w.id === worldId)) return;
  }
}
