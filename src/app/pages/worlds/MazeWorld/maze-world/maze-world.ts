import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OfflineService } from '../../../../core/services/offline.service';
import { SaveService } from '../../../../core/services/save';
import { GameStateService } from '../../../../core/state/game-state.service';
import { BaseWorld } from '../../base-world';
import { SettingsService } from '../../../../core/services/settings';
import { CeilPipe } from '../../../../core/pipes/ceil.pipe';

@Component({
  selector: 'app-maze-world',
  standalone: true,
  imports: [CommonModule, CeilPipe],
  templateUrl: './maze-world.html',
  styleUrl: './maze-world.scss',
})
export class MazeWorld extends BaseWorld {
  worldId = 'maze';
  constructor(
    gameState: GameStateService,
    save: SaveService,
    offline: OfflineService,
    settings: SettingsService,
  ) {
    super(gameState, save, offline, settings);
  }
}
