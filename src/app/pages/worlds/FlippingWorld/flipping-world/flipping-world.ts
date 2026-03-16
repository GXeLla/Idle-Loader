import { Component } from '@angular/core';
import { OfflineService } from '../../../../core/services/offline.service';
import { CommonModule } from '@angular/common';
import { BaseWorld } from '../../base-world';
import { GameStateService } from '../../../../core/state/game-state.service';
import { SaveService } from '../../../../core/services/save';

@Component({
  selector: 'app-flipping-world',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Flipping World</h2>`,
})
export class FlippingWorld extends BaseWorld {
  worldId = 'flipping';
  constructor(gameState: GameStateService, save: SaveService, offline: OfflineService) {
    super(gameState, save, offline);
  }
}
