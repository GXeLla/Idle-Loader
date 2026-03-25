import { Injectable } from '@angular/core';
import { GameStateService, Player, Spinner } from '../state/game-state.service';
import { WORLDS } from '../config/worlds.config';

@Injectable({ providedIn: 'root' })
export class SaveService {
  private readonly STORAGE_KEY = 'idle_clicker_save';

  constructor(private gameState: GameStateService) {}

  /** Save the entire game state (all worlds + last visited + ascended) */
  saveGame() {
    const data = {
      players: this.gameState.players, // all per-world player objects
      lastVisitedWorld: this.gameState.lastVisitedWorld,
      hasAscended: this.gameState.hasAscended,
      lastSave: Date.now()
    };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }

  /** Load saved game from localStorage */
  loadGame() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (!saved) return;

    try {
      const data = JSON.parse(saved);

      // Restore players per world
      if (data.players) {
        for (const worldId in data.players) {
          const player: Player = data.players[worldId];
          this.gameState.loadPlayer(worldId, player);
        }
      }

      // Restore last visited world
      if (data.lastVisitedWorld) {
        this.gameState.lastVisitedWorld = data.lastVisitedWorld;
      }

      // Restore ascend state
      if (data.hasAscended !== undefined) {
        (this.gameState as any)._hasAscended = data.hasAscended;
      }
    } catch (e) {
      console.error('Failed to load save', e);
    }
  }


giveCheatCoins() {
  console.log('--- Cheat Coins Triggered ---');

  // ✅ SAVE CURRENT WORLD
  const currentWorld = this.gameState.lastVisitedWorld;

  const saveRaw = localStorage.getItem(this.STORAGE_KEY);
  const save = saveRaw ? JSON.parse(saveRaw) : { players: {} };

  WORLDS.forEach(world => {
    const worldId = world.id;

    if (!save.players[worldId]) save.players[worldId] = { currencies: {} };
    const savedPlayer = save.players[worldId];
    if (!savedPlayer.currencies) savedPlayer.currencies = {};

    // ⚠️ IMPORTANT: do NOT switch world context
    if (!this.gameState.players[worldId]) {
      this.gameState.initCurrentWorld(worldId);

      // 🔥 IMMEDIATELY RESTORE
      this.gameState.lastVisitedWorld = currentWorld;
    }

    const player = this.gameState.players[worldId];
    if (!player.currencies) player.currencies = {};

    world.currencies.forEach(currency => {
      const key = `${worldId}_${currency}`;

      savedPlayer.currencies[key] = (savedPlayer.currencies[key] || 0) + 10;
      player.currencies[key] = (player.currencies[key] || 0) + 10;
    });
  });

  // ✅ RESTORE AGAIN (final safety)
  if (currentWorld) {
    this.gameState.setVisitedWorld(currentWorld);
  }

  localStorage.setItem(this.STORAGE_KEY, JSON.stringify(save));
  console.log('✅ Cheat coins applied without changing world.');
}

  resetProgress() {
    localStorage.removeItem('idle_clicker_save');
  }
}
