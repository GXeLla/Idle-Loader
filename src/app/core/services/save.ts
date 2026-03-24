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

  // Load save or create fresh
  const saveRaw = localStorage.getItem(this.STORAGE_KEY);
  const save = saveRaw ? JSON.parse(saveRaw) : { players: {} };

  WORLDS.forEach(world => {
    const worldId = world.id;

    // Ensure save object exists
    if (!save.players[worldId]) save.players[worldId] = { currencies: {} };
    const savedPlayer = save.players[worldId];
    if (!savedPlayer.currencies) savedPlayer.currencies = {};

    // Ensure in-memory player exists
    if (!this.gameState.players[worldId]) this.gameState.initCurrentWorld(worldId);
    const player = this.gameState.players[worldId];
    if (!player.currencies) player.currencies = {};

    // Add +10 to **namespaced keys**
    world.currencies.forEach(currency => {
      const key = `${worldId}_${currency}`;
      const oldSave = savedPlayer.currencies[key] || 0;
      savedPlayer.currencies[key] = oldSave + 10;

      const oldMem = player.currencies[key] || 0;
      player.currencies[key] = oldMem + 10;

      console.log(
        `World ${worldId} | ${currency}: Save ${oldSave} → ${savedPlayer.currencies[key]}, In-memory ${oldMem} → ${player.currencies[key]}`
      );
    });
  });

  // Persist to localStorage
  localStorage.setItem(this.STORAGE_KEY, JSON.stringify(save));
  console.log('✅ Cheat coins applied to all worlds and currencies.');
}

  resetProgress() {
    localStorage.removeItem('idle_clicker_save');
  }
}
