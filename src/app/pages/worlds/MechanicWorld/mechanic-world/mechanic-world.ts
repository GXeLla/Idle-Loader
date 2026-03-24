import { Component, RendererFactory2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameStateService } from '../../../../core/state/game-state.service';
import { SaveService } from '../../../../core/services/save';
import { OfflineService } from '../../../../core/services/offline.service';
import { BaseWorld } from '../../base-world';
import { SettingsService } from '../../../../core/services/settings';
import { CeilPipe } from '../../../../core/pipes/ceil.pipe';

@Component({
  selector: 'app-mechanic-world',
  standalone: true,
  imports: [CommonModule, CeilPipe],
  templateUrl: './mechanic-world.html',
  styleUrl: './mechanic-world.scss',
})
export class MechanicWorld extends BaseWorld {
  worldId = 'mechanic';

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
