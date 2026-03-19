import { Component } from '@angular/core';
import { OfflineService } from '../../../../core/services/offline.service';
import { SaveService } from '../../../../core/services/save';
import { GameStateService } from '../../../../core/state/game-state.service';
import { BaseWorld } from '../../base-world';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../../../core/services/settings';

@Component({
  selector: 'app-glowing-world',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Glowing World</h2>`,
})
export class GlowingWorld extends BaseWorld {
  worldId = 'glowing';
  constructor(
    gameState: GameStateService,
    save: SaveService,
    offline: OfflineService,
    settings: SettingsService
  ) {
    super(gameState, save, offline, settings);
  }
}
