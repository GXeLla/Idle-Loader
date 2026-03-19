import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameStateService } from '../../../../core/state/game-state.service';
import { SaveService } from '../../../../core/services/save';
import { OfflineService } from '../../../../core/services/offline.service';
import { BaseWorld } from '../../base-world';
import { SettingsService } from '../../../../core/services/settings';

@Component({
  selector: 'app-bouncing-world',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Bouncing World</h2>`,
})
export class BouncingWorld extends BaseWorld {
  worldId = 'bouncing';
  constructor(
    gameState: GameStateService,
    save: SaveService,
    offline: OfflineService,
    settings: SettingsService
  ) {
    super(gameState, save, offline, settings);
  }
}
