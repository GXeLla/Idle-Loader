import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameStateService, Player } from '../../core/state/game-state.service';
import { BASE_CURRENCIES, CURRENCY_COLORS } from '../../core/config/worlds.config';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.scss']
})
export class ProfileComponent implements AfterViewInit {

    ngAfterViewInit() {
    this.applySpinnerColors();
  }

  applySpinnerColors() {
    // select all spinner items
    const spinnerItems = document.querySelectorAll<HTMLElement>('.spinner-item');

    spinnerItems.forEach((item, index) => {
      // first span
      const firstSpan = item.querySelector('span');
      if (!firstSpan) return;

      // get currency by order (loop if more items than currencies)
      const currencyName = BASE_CURRENCIES[index % BASE_CURRENCIES.length];
      const color = CURRENCY_COLORS[currencyName] || '#ffffff';

      firstSpan.style.color = color;
    });
  }
  selectedWorld?: string;

  constructor(public gameState: GameStateService) {
    // default to first unlocked world
    const worlds = this.gameState.getUnlockedWorlds();
    this.selectedWorld = worlds.length > 0 ? worlds[0] : undefined;
  }

  /** Returns the player for the currently selected world */
  get currentPlayer(): Player | undefined {
    if (!this.selectedWorld) return undefined;
    return this.gameState.players[this.selectedWorld];
  }

  /** Completion % = unlocked spinners / total spinners */
  get completionPercent(): number {
    const player = this.currentPlayer;
    if (!player) return 0;

    const unlocked = player.spinners.filter(sp => sp.amount > 0).length;
    const total = player.spinners.length;
    return total > 0 ? Math.round((unlocked / total) * 100) : 0;
  }

  /** Spinner count */
  get spinnerCountText(): string {
    const player = this.currentPlayer;
    if (!player) return '0 / 0';
    return `${player.spinners.filter(sp => sp.amount > 0).length} / ${player.spinners.length}`;
  }

  /** Switch tabs */
  selectWorld(worldId: string) {
    this.selectedWorld = worldId;
  }

}
