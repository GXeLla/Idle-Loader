import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameStateService } from '../../../../core/state/game-state.service';
import { SaveService } from '../../../../core/services/save';
import { OfflineService } from '../../../../core/services/offline.service';
import { BaseWorld } from '../../base-world';

@Component({
  selector: 'app-spinner-world',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Spinner World</h2>`,
})
export class SpinnerWorld extends BaseWorld {
  worldId = 'spinner';

  constructor(
    gameState: GameStateService,
    save: SaveService,
    offline: OfflineService
  ) {
    super(gameState, save, offline);
  }
}
