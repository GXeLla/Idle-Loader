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
    private gameState: GameStateService
  ) {}

  /** Rewards filtered for the last visited world */
  get worldRewards() {

    const lastWorld = this.gameState.getVisitedWorld();

    const rewards: Record<string, number> = {};

    Object.entries(this.offline.offlineRewards).forEach(([currency, value]) => {

      // simple filter example
      if (currency.includes(lastWorld.toLowerCase())) {
        rewards[currency] = value;
      }

    });

    return rewards;
  }

  claim() {
    this.offline.claimOfflineRewards();
  }

}
