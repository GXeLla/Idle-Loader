import { CommonModule } from '@angular/common';
import { Component, RendererFactory2 } from '@angular/core';
import { OfflineService } from '../../../../core/services/offline.service';
import { SaveService } from '../../../../core/services/save';
import { GameStateService } from '../../../../core/state/game-state.service';
import { BaseWorld } from '../../base-world';
import { SettingsService } from '../../../../core/services/settings';
import { CeilPipe } from '../../../../core/pipes/ceil.pipe';

@Component({
  selector: 'app-factory-world',
  standalone: true,
  imports: [CommonModule, CeilPipe],
  templateUrl: './factory-world.html',
  styleUrl: './factory-world.scss',
})
export class FactoryWorld extends BaseWorld {
  worldId = 'factory';
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
