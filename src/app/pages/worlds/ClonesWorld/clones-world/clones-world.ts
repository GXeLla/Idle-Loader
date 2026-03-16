import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OfflineService } from '../../../../core/services/offline.service';
import { SaveService } from '../../../../core/services/save';
import { GameStateService } from '../../../../core/state/game-state.service';
import { BaseWorld } from '../../base-world';

@Component({
  selector: 'app-clones-world',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Clones World</h2>`,
})
export class ClonesWorld extends BaseWorld {
  worldId = 'clones';
  constructor(gameState: GameStateService, save: SaveService, offline: OfflineService) {
    super(gameState, save, offline);
  }
}
