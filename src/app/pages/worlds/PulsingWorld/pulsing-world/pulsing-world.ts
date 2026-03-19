import { Component } from '@angular/core';
import { GameStateService } from '../../../../core/state/game-state.service';
import { OfflineService } from '../../../../core/services/offline.service';
import { SaveService } from '../../../../core/services/save';
import { BaseWorld } from '../../base-world';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../../../core/services/settings';

@Component({
  selector: 'app-pulsing-world',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Pulsing World</h2>`,
})
export class PulsingWorld extends BaseWorld {
  worldId = 'pulsing';
  constructor(
    gameState: GameStateService,
    save: SaveService,
    offline: OfflineService,
    settings: SettingsService
  ) {
    super(gameState, save, offline, settings);
  }
}
