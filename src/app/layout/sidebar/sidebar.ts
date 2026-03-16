import { Component } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { CeilPipe } from '../../core/pipes/ceil.pipe';
import { GameStateService, Spinner } from '../../core/state/game-state.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, CeilPipe, AsyncPipe],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent {
  // active tab: 'spinners', 'totals', 'shop'
  public activeTab: 'spinners' | 'totals' | 'shop' = 'spinners';

  conversionRate = 2; // same as your shop

  constructor(public gameState: GameStateService) {}

  get player$() {
    return this.gameState.player$;
  }

  /** Sort spinners by value */
  sortSpinnersByValue(spinners: Spinner[]): Spinner[] {
    return [...spinners].sort((a, b) => (b.amount * 0.02) - (a.amount * 0.02));
  }

  /** Total coins for spinner */
  getSpinnerTotal(sp: Spinner, currencies: Record<string, number>): number {
    return currencies[sp.currencyProduced] || 0;
  }

  /** Shop helpers */

  getCostCurrency(index: number): string {
    if (index === 0) return this.gameState.player.spinners[0].currencyProduced;
    return this.gameState.player.spinners[index - 1].currencyProduced;
  }

  getGainCurrency(index: number): string {
    return this.gameState.player.spinners[index].currencyProduced;
  }

  getMaxConvert(index: number): number {
    if (index === 0) return 0;
    const available = this.gameState.player.currencies[this.getCostCurrency(index)] || 0;
    return Math.floor(available / this.conversionRate);
  }

  canConvert(index: number): boolean {
    return this.getMaxConvert(index) > 0;
  }

  convertCurrency(index: number) {
    const maxQty = this.getMaxConvert(index);
    if (maxQty === 0) return;

    const costCurrency = this.getCostCurrency(index);
    const gainCurrency = this.getGainCurrency(index);

    const newCurrencies = { ...this.gameState.player.currencies };
    newCurrencies[costCurrency] -= maxQty * this.conversionRate;
    newCurrencies[gainCurrency] += maxQty;

    this.gameState['_player'].next({
      spinners: this.gameState.player.spinners,
      currencies: newCurrencies,
    });
  }

  getButtonText(index: number): string {
    if (index === 0) return 'N/A';
    const maxQty = this.getMaxConvert(index);
    const cost = this.getCostCurrency(index);
    const gain = this.getGainCurrency(index);
    return maxQty > 0
      ? `${maxQty * this.conversionRate} ${cost} → ${maxQty} ${gain}`
      : `Not enough ${cost}`;
  }
}
