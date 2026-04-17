import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { GameStateService } from '../../core/state/game-state.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class NavbarComponent {
  constructor(
    private router: Router,
    public gameState: GameStateService,
  ) {}

  goHome() {
    const world = this.gameState.getVisitedWorld();

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

    const route = mapping[world] || 'ClassicWorld';
    this.router.navigate([route]);
  }
}
