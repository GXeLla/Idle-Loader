import { Component } from '@angular/core';
import { OfflineService } from '../../../../core/services/offline.service';
import { SaveService } from '../../../../core/services/save';
import { BaseWorld } from '../../base-world';
import { GameStateService } from '../../../../core/state/game-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-continuous-world',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Continuous World</h2>`,
})
export class ContinuousWorld extends BaseWorld {
  worldId = 'continuous';
  constructor(gameState: GameStateService, save: SaveService, offline: OfflineService) {
    super(gameState, save, offline);
  }
}
