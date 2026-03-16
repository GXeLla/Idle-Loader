import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OfflineService } from '../../../../core/services/offline.service';
import { SaveService } from '../../../../core/services/save';
import { GameStateService } from '../../../../core/state/game-state.service';
import { BaseWorld } from '../../base-world';

@Component({
  selector: 'app-thin-world',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Thin World</h2>`,
})
export class ThinWorld extends BaseWorld {
  worldId = 'thin';
  constructor(gameState: GameStateService, save: SaveService, offline: OfflineService) {
    super(gameState, save, offline);
  }
}
