import { OnInit, Injectable } from '@angular/core';
import { GameStateService } from '../../core/state/game-state.service';
import { SaveService } from '../../core/services/save';
import { OfflineService } from '../../core/services/offline.service';

@Injectable()
export abstract class BaseWorld implements OnInit {
  abstract worldId: string;

  constructor(
    public gameState: GameStateService,
    protected save: SaveService,
    protected offline: OfflineService
  ) {}

  ngOnInit() {
    if (this.gameState.players[this.worldId]) {
      this.gameState._player.next(this.gameState.players[this.worldId]);
    } else {
      this.gameState.initCurrentWorld(this.worldId);
    }

    this.gameState.setVisitedWorld(this.worldId);
    this.save.saveGame();
    this.offline.loadGame();
  }

  /** Max buyable qty for a spinner */
  getMaxQty(index: number): number {
    const sp = this.gameState.player.spinners[index];
    if (!sp) return 0;

    if (index === 0 && sp.amount === 0) return 1;

    const available = this.gameState.player.currencies[sp.costCurrency] || 0;
    let qty = 0,
      total = 0;

    while (true) {
      const isFirstFree = index === 0 && sp.amount === 0 && qty === 0;
      const cost = isFirstFree ? 0 : sp.basePrice + sp.priceIncrement * (sp.amount + qty);

      if (total + cost <= available) {
        total += cost;
        qty++;
      } else break;
    }
    return qty;
  }

  /** Buy the maximum possible */
  buyMax(index: number) {
    const maxQty = this.getMaxQty(index);
    if (maxQty > 0) {
      this.gameState.buySpinner(index, maxQty);
      this.save.saveGame();
    }
  }

  /** Text for button */
  getCostText(index: number): string {
    const sp = this.gameState.player.spinners[index];
    if (!sp) return 'N/A';

    const maxQty = this.getMaxQty(index);
    const totalCost = this.gameState.getSpinnerCost(index, maxQty);
    if (maxQty === 0) return 'Cannot afford';
    return `${maxQty}x → ${totalCost} ${sp.costCurrency}`;
  }
}
