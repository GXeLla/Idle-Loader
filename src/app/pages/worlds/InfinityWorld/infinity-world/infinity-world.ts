import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseWorld } from '../../base-world';
import { GameStateService } from '../../../../core/state/game-state.service';
import { SaveService } from '../../../../core/services/save';
import { OfflineService } from '../../../../core/services/offline.service';

@Component({
  selector: 'app-infinity-world',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Infinity World</h2>`,
})
export class InfinityWorld extends BaseWorld {
  worldId = 'infinity';
  constructor(gameState: GameStateService, save: SaveService, offline: OfflineService) {
    super(gameState, save, offline);
  }
}
