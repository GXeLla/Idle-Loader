import {
  OnInit,
  Injectable,
  Renderer2,
  RendererFactory2,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { GameStateService, Spinner } from '../../core/state/game-state.service';
import { SaveService } from '../../core/services/save';
import { OfflineService } from '../../core/services/offline.service';
import { SettingsService } from '../../core/services/settings';
import { SPINNER_CSS } from '../../shared/components/Style-popup-modal/spinner-css';
import { CURRENCY_COLORS, WorldConfig, WORLDS } from '../../core/config/worlds.config';

@Injectable()
export abstract class BaseWorld implements OnInit, AfterViewInit, OnDestroy {
  abstract worldId: string;
  loadingScreens: string[] = [];

  // ---------------- Dynamic content properties ----------------
  private renderer!: Renderer2;
  private intervalId: any;
  private worldConfig!: WorldConfig;

  // Store colors by text content
  private elementColorMap: Map<string, string> = new Map();

  @ViewChildren('spinnerLeft', { read: ElementRef }) spinnerEls!: QueryList<ElementRef>;

  constructor(
    public gameState: GameStateService,
    private save: SaveService,
    private offline: OfflineService,
    public settings: SettingsService,
    rendererFactory: RendererFactory2,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

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

  ngAfterViewInit() {
    this.setRandomColors();
    this.worldConfig = WORLDS.find((w) => w.id === this.worldId)!;

    const spinnerElements = document.querySelectorAll<HTMLElement>('.spinner-left');

    spinnerElements.forEach((el, index) => {
      const sp = this.gameState.player.spinners[index];
      if (!sp) return;

      this.stopAnimation(index);
      this.startFallingAnimation(el, sp, index);
    });

    this.syncSpinnerLockUI();
  }

  buyMax(index: number) {
    const maxQty = this.getMaxQty(index);
    if (maxQty > 0) {
      this.gameState.buySpinner(index, maxQty);
      this.save.saveGame();

      this.syncSpinnerLockUI();
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

    // 🔒 FIRST: check unlock condition
    if (sp.unlockAfter) {
      const prev = this.gameState.player.spinners.find((s) => s.name === sp.unlockAfter);

      if (!prev || !prev.active) {
        return 'Previous not unlocked';
      }
    }

    // 💰 THEN: check affordability
    const maxQty = this.getMaxQty(index);
    if (maxQty === 0) return 'Cannot afford';

    const totalCost = this.gameState.getSpinnerCost(index, maxQty);
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

  private syncSpinnerLockUI() {
    const spinnerBoxes = document.querySelectorAll<HTMLElement>('.spinner-box');

    spinnerBoxes.forEach((el, index) => {
      const sp = this.gameState.player.spinners[index];
      if (!sp) return;

      // reset FIRST
      this.renderer.removeClass(el, 'locked-spinner');

      let locked = false;

      if (sp.unlockAfter) {
        const prev = this.gameState.player.spinners.find((s) => s.name === sp.unlockAfter);
        if (!prev || !prev.active) {
          locked = true;
        }
      }

      if (locked) {
        this.renderer.addClass(el, 'locked-spinner');
      }
    });
  }

  private intervals = new Map<number, any>();

  private startFallingAnimation(el: HTMLElement, sp: Spinner, index: number) {
    const MAX_SYMBOLS = 3; // max simultaneous spans
    const interval = setInterval(() => {
      if (!this.settings.animationsEnabled) return; // stop if animations disabled

      // Count current falling symbols
      const currentSpans = el.querySelectorAll('span').length;
      if (currentSpans >= MAX_SYMBOLS) return;

      const span = this.renderer.createElement('span');
      span.innerHTML = this.worldConfig.symbol || '*';

      // Extract base currency for color
      let baseCurrency = (sp.currencyProduced || '').toLowerCase();
      if (baseCurrency.includes('_')) {
        baseCurrency = baseCurrency.split('_')[1];
      }
      const color = CURRENCY_COLORS[baseCurrency] || '#ffffff';
      this.renderer.setStyle(span, 'color', color);

      // Random font size
      const fontSize = Math.random() * 10 + 12;
      this.renderer.setStyle(span, 'fontSize', `${fontSize}px`);

      // Initial styles
      this.renderer.setStyle(span, 'position', 'absolute');
      this.renderer.setStyle(span, 'left', `${Math.random() * 100}%`);
      this.renderer.setStyle(span, 'top', '-20px');
      this.renderer.setStyle(span, 'pointerEvents', 'none');
      this.renderer.setStyle(span, 'userSelect', 'none');

      const duration = Math.random() * 5 + 5; // fall takes 5–10s
      this.renderer.setStyle(span, 'transition', `top ${duration}s linear`);

      this.renderer.appendChild(el, span);
      span.getBoundingClientRect(); // force reflow

      setTimeout(() => this.renderer.setStyle(span, 'top', '100%'), 50);
      setTimeout(
        () => {
          if (el.contains(span)) this.renderer.removeChild(el, span);
        },
        (duration + 0.2) * 1000,
      );
    }, 1000); // spawn every 1s

    this.intervals.set(index, interval);
  }

  private stopAnimation(index: number) {
    const existing = this.intervals.get(index);
    if (existing) {
      clearInterval(existing);
      this.intervals.delete(index);
    }
  }

  ngOnDestroy() {
    this.intervals.forEach((interval) => clearInterval(interval));
    this.intervals.clear();
  }

  setRandomColors() {
    // --- World titles ---
    const titleElements = document.querySelectorAll('.world-title');
    titleElements.forEach((el) => {
      const name = (el.textContent?.trim() || '').toLowerCase().replace(/\s+/g, '_');

      // random muted/gold/blue
      let r = 0,
        g = 0,
        b = 0;
      const hueType = Math.floor(Math.random() * 3);
      switch (hueType) {
        case 0:
          r = 150 + Math.floor(Math.random() * 60);
          g = 100 + Math.floor(Math.random() * 60);
          b = 50 + Math.floor(Math.random() * 50);
          break;
        case 1:
          r = 50 + Math.floor(Math.random() * 50);
          g = 80 + Math.floor(Math.random() * 50);
          b = 130 + Math.floor(Math.random() * 60);
          break;
        case 2:
          r = 180 + Math.floor(Math.random() * 40);
          g = 160 + Math.floor(Math.random() * 40);
          b = 100 + Math.floor(Math.random() * 30);
          break;
      }
      const color = `rgba(${r},${g},${b},1)`;
      (el as HTMLElement).style.color = color;

      // Store in map
      this.elementColorMap.set(name, color);
    });

    // --- Spinner-box ---
    const spinnerElements = document.querySelectorAll('.spinner-box');
    spinnerElements.forEach((el) => {
      // pick the spinner name from the .spinner-left p inside
      const leftP = el.querySelector('.spinner-left p');
      if (!leftP) return;

      const name = (leftP.textContent?.trim() || '').toLowerCase().replace(/\s+/g, '_');

      // Pick a random color (golden/muted)
      const r = 220 + Math.floor(Math.random() * 35);
      const g = 170 + Math.floor(Math.random() * 30);
      const b = 80 + Math.floor(Math.random() * 40);
      const textColor = `rgba(${r},${g},${b},1)`;

      // Apply the color to the whole spinner-box
      (el as HTMLElement).style.color = textColor;

      // Optionally set a background too
      const bgBase = 30 + Math.floor(Math.random() * 50);
      (el as HTMLElement).style.backgroundColor = `rgba(${bgBase},${bgBase},${bgBase},0.9)`;

      // Store for Sidebar
      this.elementColorMap.set(name, textColor);
    });

    // Make map global
    (window as any).elementColorMap = this.elementColorMap;
  }
}
