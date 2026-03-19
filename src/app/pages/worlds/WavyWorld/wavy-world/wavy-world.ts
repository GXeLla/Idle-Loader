import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseWorld } from '../../base-world';
import { GameStateService } from '../../../../core/state/game-state.service';
import { SaveService } from '../../../../core/services/save';
import { OfflineService } from '../../../../core/services/offline.service';
import { SettingsService } from '../../../../core/services/settings';

@Component({
  selector: 'app-wavy-world',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Wavy World</h2>`,
})
export class WavyWorld extends BaseWorld {
  worldId = 'wavy';
  constructor(
    gameState: GameStateService,
    save: SaveService,
    offline: OfflineService,
    settings: SettingsService
  ) {
    super(gameState, save, offline, settings);
  }
}
