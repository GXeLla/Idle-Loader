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

    const route = mapping[world] || 'ClassicWorld';
    this.router.navigate([route]);
  }
}
