import { Component } from '@angular/core';
import { OfflineService } from '../../../../core/services/offline.service';
import { SaveService } from '../../../../core/services/save';
import { BaseWorld } from '../../base-world';
import { GameStateService } from '../../../../core/state/game-state.service';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../../../core/services/settings';
import { CeilPipe } from '../../../../core/pipes/ceil.pipe';

@Component({
  selector: 'app-continuous-world',
  standalone: true,
  imports: [CommonModule, CeilPipe],
  templateUrl: './continuous-world.html',
  styleUrl: './continuous-world.scss',
})
export class ContinuousWorld extends BaseWorld {
  worldId = 'continuous';
  constructor(
    gameState: GameStateService,
    save: SaveService,
    offline: OfflineService,
    settings: SettingsService,
  ) {
    super(gameState, save, offline, settings);
  }
}
