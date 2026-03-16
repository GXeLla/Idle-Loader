import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseWorld } from '../../base-world';
import { GameStateService } from '../../../../core/state/game-state.service';
import { OfflineService } from '../../../../core/services/offline.service';
import { SaveService } from '../../../../core/services/save';

@Component({
  selector: 'app-zig-zag-world',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Zig Zag World</h2>`,
})
export class ZigZagWorld extends BaseWorld {
  worldId = 'zig-zag';
  constructor(gameState: GameStateService, save: SaveService, offline: OfflineService) {
    super(gameState, save, offline);
  }
}
