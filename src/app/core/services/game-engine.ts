import { Injectable } from '@angular/core';
import { GameStateService } from '../state/game-state.service';
import { OfflineService } from './offline.service';
import { SaveService } from './save';

@Injectable({
  providedIn: 'root'
})
export class GameEngineService {
  constructor(
    private gameState: GameStateService,
    private offline: OfflineService,
    private save: SaveService
  ) {}

  start() {
    // 1️⃣ Load offline rewards from last save (will trigger modal if applicable)
    this.offline.loadGame();

    let lastTick = Date.now();

    // 2️⃣ Main game tick (every 1 second)
    setInterval(() => {
      const now = Date.now();
      const delta = now - lastTick;
      lastTick = now;

      this.gameState.tickTimers(delta);
    }, 1000);

    // 3️⃣ Auto-save every 10 seconds to update lastSave
    setInterval(() => {
      this.save.saveGame();
    }, 10000);
  }
}
