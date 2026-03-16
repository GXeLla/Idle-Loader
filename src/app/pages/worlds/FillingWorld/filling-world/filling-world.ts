import { Component } from '@angular/core';
import { OfflineService } from '../../../../core/services/offline.service';
import { SaveService } from '../../../../core/services/save';
import { GameStateService } from '../../../../core/state/game-state.service';
import { BaseWorld } from '../../base-world';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filling-world',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Filling World</h2>`,
})
export class FillingWorld extends BaseWorld {
  worldId = 'filling';
  constructor(gameState: GameStateService, save: SaveService, offline: OfflineService) {
    super(gameState, save, offline);
  }
}
