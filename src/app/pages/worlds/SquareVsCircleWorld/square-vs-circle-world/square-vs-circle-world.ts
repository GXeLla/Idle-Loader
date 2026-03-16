import { Component } from '@angular/core';
import { OfflineService } from '../../../../core/services/offline.service';
import { SaveService } from '../../../../core/services/save';
import { GameStateService } from '../../../../core/state/game-state.service';
import { BaseWorld } from '../../base-world';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square-vs-circle-world',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Square Vs Circle World</h2>`,
})
export class SquareVsCircleWorld extends BaseWorld {
  worldId = 'square-vs-circle';
  constructor(gameState: GameStateService, save: SaveService, offline: OfflineService) {
    super(gameState, save, offline);
  }
}
