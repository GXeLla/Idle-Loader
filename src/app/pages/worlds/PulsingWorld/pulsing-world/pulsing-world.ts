import { Component, RendererFactory2 } from '@angular/core';
import { GameStateService } from '../../../../core/state/game-state.service';
import { OfflineService } from '../../../../core/services/offline.service';
import { SaveService } from '../../../../core/services/save';
import { BaseWorld } from '../../base-world';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../../../core/services/settings';
import { CeilPipe } from '../../../../core/pipes/ceil.pipe';

@Component({
  selector: 'app-pulsing-world',
  standalone: true,
  imports: [CommonModule, CeilPipe],
  templateUrl: './pulsing-world.html',
  styleUrl: './pulsing-world.scss',
})
export class PulsingWorld extends BaseWorld {
  worldId = 'pulsing';
  constructor(
    gameState: GameStateService,
    save: SaveService,
    offline: OfflineService,
    settings: SettingsService,
    rendererFactory: RendererFactory2
  ) {
    super(gameState, save, offline, settings, rendererFactory);
  }
}
