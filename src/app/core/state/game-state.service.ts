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
  loaderCSS?: string;
  showModal?: boolean;
}

export interface Player {
  currencies: Record<string, number>;
  spinners: Spinner[];
  spinnerCount?: number;
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
    const worldConfig = WORLDS.find((w) => w.id === worldId);
    if (!worldConfig) throw new Error(`World not found: ${worldId}`);

    const maxSpinners =
      worldId === 'classic'
        ? 40
        : worldId === 'arcade'
          ? 10
          : worldId === 'bars'
            ? 30
            : worldId === 'dots'
              ? 50
              : worldId === 'dots-vs-bars'
                ? 20
                : worldId === 'spinner'
                  ? 30
                  : worldId === 'shapes'
                    ? 40
                    : worldId === 'polygons'
                      ? 12
                      : worldId === 'progress'
                        ? 20
                        : worldId === 'wobbling'
                          ? 20
                          : worldId === 'infinity'
                            ? 20
                            : worldId === 'zig-zag'
                              ? 20
                              : worldId === 'wavy'
                                ? 16
                                : worldId === 'mechanic'
                                  ? 12
                                  : worldId === 'continuous'
                                    ? 10
                                    : worldId === 'growing'
                                      ? 10
                                      : worldId === 'pulsing'
                                        ? 10
                                        : worldId === 'flipping'
                                          ? 20
                                          : worldId === 'hypnotic'
                                            ? 20
                                            : worldId === 'rolling'
                                              ? 10
                                              : worldId === 'glowing'
                                                ? 12
                                                : worldId === 'square'
                                                  ? 11
                                                  : worldId === 'bouncing'
                                                    ? 12
                                                    : worldId === 'filling'
                                                      ? 20
                                                      : worldId === 'circle'
                                                        ? 11
                                                        : worldId === 'square-vs-circle'
                                                          ? 10
                                                          : worldId === 'colorful'
                                                            ? 20
                                                            : worldId === 'nature'
                                                              ? 16
                                                              : worldId === 'time'
                                                                ? 10
                                                                : worldId === 'hungry'
                                                                  ? 8
                                                                  : worldId === 'shuriken'
                                                                    ? 10
                                                                    : worldId === 'dancers'
                                                                      ? 10
                                                                      : worldId === 'moving'
                                                                        ? 10
                                                                        : worldId === 'eyes'
                                                                          ? 10
                                                                          : worldId === 'line'
                                                                            ? 20
                                                                            : worldId === 'thin'
                                                                              ? 10
                                                                              : worldId === 'cut'
                                                                                ? 10
                                                                                : worldId ===
                                                                                    'clones'
                                                                                  ? 20
                                                                                  : worldId ===
                                                                                      'arrow'
                                                                                    ? 10
                                                                                    : worldId ===
                                                                                        'blob'
                                                                                      ? 20
                                                                                      : worldId ===
                                                                                          'maze'
                                                                                        ? 10
                                                                                        : worldId ===
                                                                                            'factory'
                                                                                          ? 8
                                                                                          : worldId ===
                                                                                              'three-d'
                                                                                            ? 12
                                                                                            : worldConfig
                                                                                                .currencies
                                                                                                .length;

    let spinners: Spinner[];
    let currencies: Record<string, number>;

    if (!this.players[worldId]) {
      // New player
      spinners = worldConfig.currencies
        .slice(0, maxSpinners)
        .map((c, i) => this.createSpinner(worldId, c, i, worldConfig));
      currencies = {};
      worldConfig.currencies.forEach((c) => (currencies[`${worldId}_${c}`] = 0));
    } else {
      // Existing player: trim spinners to maxSpinners
      const existing = this.players[worldId];
      spinners = existing.spinners.slice(0, maxSpinners);
      currencies = existing.currencies;
    }

    this.players[worldId] = { spinners, currencies, spinnerCount: maxSpinners };

    this.lastVisitedWorld = worldId;
    this._player.next(this.players[worldId]);
  }

  // Helper to create spinner object
  private createSpinner(worldId: string, c: string, i: number, worldConfig: any): Spinner {
    return {
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
      loaderCSS: `/* CSS for loader${i + 1} */\n.loader${i + 1} { /* ... */ }`,
      showModal: false,
    };
  }

  /** Buy spinner logic */
  buySpinner(index: number, qty: number = 1) {
    const p = this.player;
    const sp = p.spinners[index];
    if (!sp) return;

    if (sp.unlockAfter) {
      const prev = p.spinners.find((s) => s.name === sp.unlockAfter);
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
    // ensure world exists
    if (!this.players[worldId]) {
      this.initCurrentWorld(worldId);
    }

    this.lastVisitedWorld = worldId;

    if (this.players[worldId]) {
      this._player.next(this.players[worldId]);
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

    newSpinners.forEach((sp) => {
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

    WORLDS.forEach((w) => this.unlockWorld(w.id));

    this._hasAscended = true;
    this._player.next({ spinners: this.player.spinners, currencies: newCurrencies });

    if (this.lastVisitedWorld) this.players[this.lastVisitedWorld] = this._player.value;

    return true;
  }

  /** Return all unlocked worlds */
  getUnlockedWorlds(): string[] {
    return WORLDS.map((w) => w.id);
  }

  unlockWorld(worldId: string) {
    if (!WORLDS.find((w) => w.id === worldId)) return;
  }
}
