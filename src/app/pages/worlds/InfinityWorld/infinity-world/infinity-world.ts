import { CommonModule } from '@angular/common';
import { Component, RendererFactory2 } from '@angular/core';
import { BaseWorld } from '../../base-world';
import { GameStateService } from '../../../../core/state/game-state.service';
import { SaveService } from '../../../../core/services/save';
import { OfflineService } from '../../../../core/services/offline.service';
import { SettingsService } from '../../../../core/services/settings';
import { CeilPipe } from '../../../../core/pipes/ceil.pipe';

@Component({
  selector: 'app-infinity-world',
  standalone: true,
  imports: [CommonModule, CeilPipe],
  templateUrl: './infinity-world.html',
  styleUrl: './infinity-world.scss',
})
export class InfinityWorld extends BaseWorld {
  worldId = 'infinity';
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
