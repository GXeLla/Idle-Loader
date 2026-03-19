import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameStateService } from '../../../../core/state/game-state.service';
import { SaveService } from '../../../../core/services/save';
import { OfflineService } from '../../../../core/services/offline.service';
import { BaseWorld } from '../../base-world';
import { SettingsService } from '../../../../core/services/settings';

@Component({
  selector: 'app-dots-world',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Dots World</h2>`,
})
export class DotsWorld extends BaseWorld {
  worldId = 'dots';

  constructor(
    gameState: GameStateService,
    save: SaveService,
    offline: OfflineService,
    settings: SettingsService
  ) {
    super(gameState, save, offline, settings);
  }
}
