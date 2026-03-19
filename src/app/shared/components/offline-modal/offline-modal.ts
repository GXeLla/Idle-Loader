import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfflineService } from '../../../core/services/offline.service';
import { GameStateService } from '../../../core/state/game-state.service';

@Component({
  selector: 'app-offline-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offline-modal.html',
  styleUrls: ['./offline-modal.scss'],
})
export class OfflineModalComponent {
  constructor(
    public offline: OfflineService,
    private gameState: GameStateService,
  ) {}

  /** Rewards filtered for the last visited world */
  get worldRewards() {
    const lastWorld = this.gameState.getVisitedWorld();
    const player = this.gameState.player;

    return player.spinners
      .map((sp) => ({
        key: sp.currencyProduced,
        value: this.offline.offlineRewards[sp.currencyProduced] || 0,
      }))
      .filter((r) => r.value > 0 && r.key.includes(lastWorld.toLowerCase()));
  }

  claim() {
    this.offline.claimOfflineRewards();
  }
}
