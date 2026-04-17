import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameStateService } from '../../core/state/game-state.service';
import { WORLDS, WorldConfig } from '../../core/config/worlds.config';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-ascend',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './ascend.html',
  styleUrls: ['./ascend.scss'],
})
export class AscendComponent {
  constructor(
    public gameState: GameStateService,
    private router: Router,
  ) {}

  // Ascend cost
  get ascendCost() {
    return this.gameState.getAscendCost();
  }

  // Can afford?
  get canAfford() {
    return this.gameState.canAscend() && !this.gameState.hasAscended;
  }

  // Perform ascend
  doAscend() {
    if (this.gameState.ascend()) {
      alert('You ascended! All worlds unlocked.');
    } else {
      alert(`You need ${this.ascendCost.amount} ${this.ascendCost.currency} to ascend.`);
    }
  }

  // Map WORLD_ID to route path (PascalCase matching app.routes.ts)
  private mapIdToRoute(worldId: string): string {
    const mapping: Record<string, string> = {
      classic: 'classic',
      bars: 'bars',
      dots: 'dots',
      'dots-vs-bars': 'dots-vs-bars',
      spinner: 'spinner',
      shapes: 'shapes',
      polygons: 'polygons',
      progress: 'progress',
      wobbling: 'wobbling',
      infinity: 'infinity',
      'zig-zag': 'zig-zag',
      wavy: 'wavy',
      mechanic: 'mechanic',
      continuous: 'continuous',
      growing: 'growing',
      pulsing: 'pulsing',
      flipping: 'flipping',
      arcade: 'arcade',
      hypnotic: 'hypnotic',
      rolling: 'rolling',
      glowing: 'glowing',
      square: 'square',
      bouncing: 'bouncing',
      filling: 'filling',
      circle: 'circle',
      'square-vs-circle': 'square-vs-circle',
      colorful: 'colorful',
      nature: 'nature',
      time: 'time',
      hungry: 'hungry',
      shuriken: 'shuriken',
      dancers: 'dancers',
      moving: 'moving',
      eyes: 'eyes',
      line: 'line',
      thin: 'thin',
      cut: 'cut',
      clones: 'clones',
      arrow: 'arrow',
      blob: 'blob',
      maze: 'maze',
      factory: 'factory',
      'three-d': 'three-d',
    };
    return mapping[worldId] || '';
  }

  // Travel to world
  travelTo(worldId: string) {
    const path = this.mapIdToRoute(worldId);
    if (!path) return;
    this.router.navigate([path]);
  }

  // Unlocked worlds for buttons (only after ascend)
  get unlockedWorlds(): WorldConfig[] {
    return this.gameState.hasAscended ? WORLDS : [];
  }
}
