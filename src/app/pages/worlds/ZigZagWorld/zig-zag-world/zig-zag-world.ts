import { CommonModule } from '@angular/common';
import { Component, RendererFactory2 } from '@angular/core';
import { BaseWorld } from '../../base-world';
import { GameStateService } from '../../../../core/state/game-state.service';
import { OfflineService } from '../../../../core/services/offline.service';
import { SaveService } from '../../../../core/services/save';
import { SettingsService } from '../../../../core/services/settings';
import { CeilPipe } from '../../../../core/pipes/ceil.pipe';

@Component({
  selector: 'app-zig-zag-world',
  standalone: true,
  imports: [CommonModule, CeilPipe],
  templateUrl: './zig-zag-world.html',
  styleUrl: './zig-zag-world.scss',
})
export class ZigZagWorld extends BaseWorld {
  worldId = 'zig-zag';
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
