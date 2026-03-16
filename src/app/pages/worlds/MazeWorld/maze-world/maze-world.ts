import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OfflineService } from '../../../../core/services/offline.service';
import { SaveService } from '../../../../core/services/save';
import { GameStateService } from '../../../../core/state/game-state.service';
import { BaseWorld } from '../../base-world';

@Component({
  selector: 'app-maze-world',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Maze World</h2>`,
})
export class MazeWorld extends BaseWorld {
  worldId = 'maze';
  constructor(gameState: GameStateService, save: SaveService, offline: OfflineService) {
    super(gameState, save, offline);
  }
}
