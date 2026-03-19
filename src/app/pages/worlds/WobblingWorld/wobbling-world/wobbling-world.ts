import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { BaseWorld } from "../../base-world";
import { GameStateService } from "../../../../core/state/game-state.service";
import { SaveService } from "../../../../core/services/save";
import { OfflineService } from "../../../../core/services/offline.service";
import { SettingsService } from "../../../../core/services/settings";

@Component({
  selector: 'app-wobbling-world',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Wobbling World</h2>`,
})
export class WobblingWorld extends BaseWorld {
  worldId = 'wobbling';
  constructor(
    gameState: GameStateService,
    save: SaveService,
    offline: OfflineService,
    settings: SettingsService
  ) {
    super(gameState, save, offline, settings);
  }
}
