import { Component, RendererFactory2 } from '@angular/core';
import { OfflineService } from '../../../../core/services/offline.service';
import { CommonModule } from '@angular/common';
import { BaseWorld } from '../../base-world';
import { GameStateService } from '../../../../core/state/game-state.service';
import { SaveService } from '../../../../core/services/save';
import { SettingsService } from '../../../../core/services/settings';
import { CeilPipe } from '../../../../core/pipes/ceil.pipe';

@Component({
  selector: 'app-flipping-world',
  standalone: true,
  imports: [CommonModule, CeilPipe],
  templateUrl: './flipping-world.html',
  styleUrl: './flipping-world.scss',
})
export class FlippingWorld extends BaseWorld {
  worldId = 'flipping';
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
