import { CommonModule } from '@angular/common';
import { Component, RendererFactory2 } from '@angular/core';
import { BaseWorld } from '../../base-world';
import { GameStateService } from '../../../../core/state/game-state.service';
import { SaveService } from '../../../../core/services/save';
import { OfflineService } from '../../../../core/services/offline.service';
import { SettingsService } from '../../../../core/services/settings';
import { CeilPipe } from '../../../../core/pipes/ceil.pipe';

@Component({
  selector: 'app-wavy-world',
  standalone: true,
  imports: [CommonModule, CeilPipe],
  templateUrl: './wavy-world.html',
  styleUrl: './wavy-world.scss',
})
export class WavyWorld extends BaseWorld {
  worldId = 'wavy';
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
