import { Injectable } from '@angular/core';
import { GameStateService, Player } from '../state/game-state.service';

@Injectable({ providedIn: 'root' })
export class OfflineService {
  offlineRewards: Record<string, number> = {};
  showOfflineModal = false;

  constructor(private gameState: GameStateService) {}

  /** Load all worlds and calculate offline rewards for the current world */
  loadGame() {
    const save = localStorage.getItem('idle_clicker_save');
    if (!save) return;

    try {
      const data = JSON.parse(save) as {
        players?: Record<string, Player>;
        lastVisitedWorld?: string;
        hasAscended?: boolean;
        lastSave?: number;
      };

      // Load all players per world
      if (data.players) {
        Object.entries(data.players).forEach(([worldId, player]) => {
          this.gameState.loadPlayer(worldId, player as Player); // ✅ cast to Player
        });
      }

      // Restore last visited world
      const worldId = data.lastVisitedWorld || 'classic';
      this.gameState.lastVisitedWorld = worldId;

      // Set current _player to the last visited world
      if (this.gameState.players[worldId]) {
        this.gameState.loadPlayer(worldId, this.gameState.players[worldId]);
      }

      // Restore ascend state
      if (data.hasAscended) (this.gameState as any)._hasAscended = data.hasAscended;

      // Calculate offline progress
      const lastSave = data.lastSave || Date.now();
      const now = Date.now();
      const offlineMs = Math.min(now - lastSave, 1000 * 60 * 60 * 8); // max 8h offline
      this.applyOfflineProgress(offlineMs);
    } catch (e) {
      console.error('Failed to load offline save', e);
    }
  }

  /** Apply offline rewards to current world */
  applyOfflineProgress(offlineMs: number) {
    const player = this.gameState.player;
    const rewards: Record<string, number> = {};

    player.spinners.forEach((sp) => {
      if (!sp.active || sp.amount === 0) return;
      const avgSpinTime = (sp.minTime + sp.maxTime) / 2;
      const spins = Math.floor(offlineMs / avgSpinTime);
      const coins = spins * this.gameState.spinnerGain(sp);

      if (coins > 0) rewards[sp.currencyProduced] = (rewards[sp.currencyProduced] || 0) + coins;
    });

    if (Object.keys(rewards).length > 0) {
      this.offlineRewards = rewards;
      this.showOfflineModal = true;
    }
  }

  /** Claim rewards for the current world */
  claimOfflineRewards() {
    Object.entries(this.offlineRewards).forEach(([currency, amount]) => {
      this.gameState.addCurrency(currency, amount);
    });
    this.offlineRewards = {};
    this.showOfflineModal = false;
  }
}
