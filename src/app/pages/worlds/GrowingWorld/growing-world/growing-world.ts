import { Component } from '@angular/core';
import { OfflineService } from '../../../../core/services/offline.service';
import { SaveService } from '../../../../core/services/save';
import { GameStateService } from '../../../../core/state/game-state.service';
import { BaseWorld } from '../../base-world';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../../../core/services/settings';
import { CeilPipe } from '../../../../core/pipes/ceil.pipe';

@Component({
  selector: 'app-growing-world',
  standalone: true,
  imports: [CommonModule, CeilPipe],
  templateUrl: './growing-world.html',
  styleUrl: './growing-world.scss',
})
export class GrowingWorld extends BaseWorld {
  worldId = 'growing';
  constructor(
    gameState: GameStateService,
    save: SaveService,
    offline: OfflineService,
    settings: SettingsService,
  ) {
    super(gameState, save, offline, settings);
  }
}
