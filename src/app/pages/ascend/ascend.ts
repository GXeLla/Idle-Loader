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
    classic: 'ClassicWorld',
    bars: 'BarsWorld',
    dots: 'DotsWorld',
    'dots-vs-bars': 'DotsVsBarsWorld',
    spinner: 'SpinnerWorld',
    shapes: 'ShapesWorld',
    polygons: 'PolygonsWorld',
    progress: 'ProgressWorld',
    wobbling: 'WobblingWorld',
    infinity: 'InfinityWorld',
    'zig-zag': 'ZigZagWorld',
    wavy: 'WavyWorld',
    mechanic: 'MechanicWorld',
    continuous: 'ContinuousWorld',
    growing: 'GrowingWorld',
    pulsing: 'PulsingWorld',
    flipping: 'FlippingWorld',
    arcade: 'ArcadeWorld',
    hypnotic: 'HypnoticWorld',
    rolling: 'RollingWorld',
    glowing: 'GlowingWorld',
    square: 'SquareWorld',
    bouncing: 'BouncingWorld',
    filling: 'FillingWorld',
    circle: 'CircleWorld',
    'square-vs-circle': 'SquareVsCircleWorld',
    colorful: 'ColorfulWorld',
    nature: 'NatureWorld',
    time: 'TimeWorld',
    hungry: 'HungryWorld',
    shuriken: 'ShurikenWorld',
    dancers: 'DancersWorld',
    moving: 'MovingWorld',
    eyes: 'EyesWorld',
    line: 'LineWorld',
    thin: 'ThinWorld',
    cut: 'CutWorld',
    clones: 'ClonesWorld',
    arrow: 'ArrowWorld',
    blob: 'BlobWorld',
    maze: 'MazeWorld',
    factory: 'FactoryWorld',
    'three-d': '3DWorld',
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
