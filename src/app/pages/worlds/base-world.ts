import { OnInit, Injectable } from '@angular/core';
import { GameStateService } from '../../core/state/game-state.service';
import { SaveService } from '../../core/services/save';
import { OfflineService } from '../../core/services/offline.service';
import { SettingsService } from '../../core/services/settings';
import { SPINNER_CSS } from '../../shared/components/Style-popup-modal/spinner-css';

@Injectable()
export abstract class BaseWorld implements OnInit {
  abstract worldId: string;
  loadingScreens: string[] = [];

  constructor(
    public gameState: GameStateService,
    private save: SaveService,
    private offline: OfflineService,
    public settings: SettingsService,
  ) {}

  ngOnInit() {
    // 1️⃣ Load save first
    this.offline.loadGame();

    // 2️⃣ Ensure world exists
    if (!this.gameState.players[this.worldId]) {
      this.gameState.initCurrentWorld(this.worldId);
    }

    // 3️⃣ Set visited world
    this.gameState.setVisitedWorld(this.worldId);

    // 4️⃣ Setup loaders
    const spinnerCount = this.gameState.player.spinners.length;
    this.loadingScreens = Array.from({ length: spinnerCount }, (_, i) => `loader${i + 1}`);

    this.gameState.player.spinners.forEach((sp, index) => {
      sp.loaderCSS = SPINNER_CSS[this.worldId]?.[index] || '/* No CSS defined */';
    });

    // 5️⃣ Save
    this.save.saveGame();
  }

  buyMax(index: number) {
    const maxQty = this.getMaxQty(index);
    if (maxQty > 0) {
      this.gameState.buySpinner(index, maxQty);
      this.save.saveGame();
    }
  }

  getMaxQty(index: number): number {
    const sp = this.gameState.player.spinners[index];
    if (!sp) return 0;
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

  getCostText(index: number): string {
    const sp = this.gameState.player.spinners[index];
    if (!sp) return 'N/A';
    const maxQty = this.getMaxQty(index);
    const totalCost = this.gameState.getSpinnerCost(index, maxQty);
    if (maxQty === 0) return 'Cannot afford';
    return `${maxQty}x → ${totalCost} ${sp.costCurrency}`;
  }

  getLoaderHtml(i: number): string {
    return `<div class="loader${i + 1}"></div>`;
  }

  copyCSS(css: string, event?: Event) {
    navigator.clipboard.writeText(css).then(() => {
      if (!event) return;
      const btn = event.target as HTMLElement;

      // Change text to "Copied!" and add class
      const originalText = btn.textContent;
      btn.textContent = 'Copied!';
      btn.classList.add('copied');

      // Reset after 700ms
      setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove('copied');
      }, 700);
    });
  }
}
