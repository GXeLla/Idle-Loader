import { Component } from '@angular/core';
import { OfflineService } from '../../../../core/services/offline.service';
import { SaveService } from '../../../../core/services/save';
import { CommonModule } from '@angular/common';
import { GameStateService } from '../../../../core/state/game-state.service';
import { BaseWorld } from '../../base-world';
import { SettingsService } from '../../../../core/services/settings';

@Component({
  selector: 'app-colorful-world',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Colorful World</h2>`,
})
export class ColorfulWorld extends BaseWorld {
  worldId = 'colorful';
  constructor(
    gameState: GameStateService,
    save: SaveService,
    offline: OfflineService,
    settings: SettingsService
  ) {
    super(gameState, save, offline, settings);
  }
}
