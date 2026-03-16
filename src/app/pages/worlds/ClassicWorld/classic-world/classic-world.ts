import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CeilPipe } from '../../../../core/pipes/ceil.pipe';
import { GameStateService } from '../../../../core/state/game-state.service';
import { SaveService } from '../../../../core/services/save';
import { OfflineService } from '../../../../core/services/offline.service';
import { BaseWorld } from '../../base-world';
import { SettingsService } from '../../../../core/services/settings';

@Component({
  selector: 'app-classic-world',
  standalone: true,
  imports: [CommonModule, CeilPipe],
  templateUrl: './classic-world.html',
  styleUrls: ['./classic-world.scss'],
})
export class ClassicWorldComponent extends BaseWorld {
  worldId = 'classic';
  loadingScreens = Array.from({ length: 40 }, (_, i) => `loader${i + 1}`);

  constructor(
    gameState: GameStateService,
    save: SaveService,
    offline: OfflineService,
    public settings: SettingsService
  ) {
    super(gameState, save, offline);
  }
}
