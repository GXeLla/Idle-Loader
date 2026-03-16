import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameStateService } from '../../core/state/game-state.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop.html',
  styleUrls: ['./shop.scss'],
})
export class ShopComponent {
  conversionRate = 2; // 2 of previous currency → 1 of this currency
  loadingScreens = Array.from({ length: 40 }, (_, i) => `loader${i + 1}`);

  constructor(public gameState: GameStateService) {}

  /** Currency to spend for this conversion */
  getCostCurrency(index: number): string {
    if (index === 0) return this.gameState.player.spinners[0].currencyProduced;
    return this.gameState.player.spinners[index - 1].currencyProduced;
  }

  /** Currency gained by conversion */
  getGainCurrency(index: number): string {
    return this.gameState.player.spinners[index].currencyProduced;
  }

  /** Max number of conversions possible with available currency */
  getMaxConvert(index: number): number {
    if (index === 0) return 0; // first spinner doesn’t convert
    const available = this.gameState.player.currencies[this.getCostCurrency(index)] || 0;
    return Math.floor(available / this.conversionRate);
  }

  /** Can convert this currency? */
  canConvert(index: number): boolean {
    return this.getMaxConvert(index) > 0;
  }

  /** Perform conversion: subtract cost, add gain */
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

  /** Button text for conversion */
  getButtonText(index: number): string {
    if (index === 0) return 'N/A';
    const maxQty = this.getMaxConvert(index);
    const cost = this.getCostCurrency(index);
    const gain = this.getGainCurrency(index);
    return maxQty > 0 ? `${maxQty * this.conversionRate} ${cost} → ${maxQty} ${gain}` : `Not enough ${cost}`;
  }
}
