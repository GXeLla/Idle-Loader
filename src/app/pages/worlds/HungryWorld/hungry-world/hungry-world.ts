import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OfflineService } from '../../../../core/services/offline.service';
import { SaveService } from '../../../../core/services/save';
import { GameStateService } from '../../../../core/state/game-state.service';
import { BaseWorld } from '../../base-world';
import { SettingsService } from '../../../../core/services/settings';
import { CeilPipe } from '../../../../core/pipes/ceil.pipe';

@Component({
  selector: 'app-hungry-world',
  standalone: true,
  imports: [CommonModule, CeilPipe],
  templateUrl: './hungry-world.html',
  styleUrl: './hungry-world.scss',
})
export class HungryWorld extends BaseWorld {
  worldId = 'hungry';
  constructor(
    gameState: GameStateService,
    save: SaveService,
    offline: OfflineService,
    settings: SettingsService,
  ) {
    super(gameState, save, offline, settings);
  }
}
