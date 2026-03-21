import { Routes } from '@angular/router';
import { ShopComponent } from './pages/shop/shop';
import { AscendComponent } from './pages/ascend/ascend';
import { ProfileComponent } from './pages/profile/profile';
import { SettingsComponent } from './pages/settings/settings';

// Worlds
import { ClassicWorld } from './pages/worlds/ClassicWorld/classic-world/classic-world';
import { BarsWorld } from './pages/worlds/BarsWorld/bars-world/bars-world';
import { DotsWorld } from './pages/worlds/DotsWorld/dots-world/dots-world';
import { DotsVsBarsWorld } from './pages/worlds/DotsVsBarsWorld/dots-vs-bars-world/dots-vs-bars-world';
import { SpinnerWorld } from './pages/worlds/SpinnerWorld/spinner-world/spinner-world';
import { ShapesWorld } from './pages/worlds/ShapesWorld/shapes-world/shapes-world';
import { PolygonsWorld } from './pages/worlds/PolygonsWorld/polygons-world/polygons-world';
import { ProgressWorld } from './pages/worlds/ProgressWorld/progress-world/progress-world';
import { WobblingWorld } from './pages/worlds/WobblingWorld/wobbling-world/wobbling-world';
import { InfinityWorld } from './pages/worlds/InfinityWorld/infinity-world/infinity-world';
import { ZigZagWorld } from './pages/worlds/ZigZagWorld/zig-zag-world/zig-zag-world';
import { WavyWorld } from './pages/worlds/WavyWorld/wavy-world/wavy-world';
import { MechanicWorld } from './pages/worlds/MechanicWorld/mechanic-world/mechanic-world';
import { ContinuousWorld } from './pages/worlds/ContinuousWorld/continuous-world/continuous-world';
import { GrowingWorld } from './pages/worlds/GrowingWorld/growing-world/growing-world';
import { PulsingWorld } from './pages/worlds/PulsingWorld/pulsing-world/pulsing-world';
import { FlippingWorld } from './pages/worlds/FlippingWorld/flipping-world/flipping-world';
import { ArcadeWorld } from './pages/worlds/ArcadeWorld/arcade-world/arcade-world';
import { HypnoticWorld } from './pages/worlds/HypnoticWorld/hypnotic-world/hypnotic-world';
import { RollingWorld } from './pages/worlds/RollingWorld/rolling-world/rolling-world';
import { GlowingWorld } from './pages/worlds/GlowingWorld/glowing-world/glowing-world';
import { SquareWorld } from './pages/worlds/SquareWorld/square-world/square-world';
import { BouncingWorld } from './pages/worlds/BouncingWorld/bouncing-world/bouncing-world';
import { FillingWorld } from './pages/worlds/FillingWorld/filling-world/filling-world';
import { CircleWorld } from './pages/worlds/CircleWorld/circle-world/circle-world';
import { SquareVsCircleWorld } from './pages/worlds/SquareVsCircleWorld/square-vs-circle-world/square-vs-circle-world';
import { ColorfulWorld } from './pages/worlds/ColorfulWorld/colorful-world/colorful-world';
import { NatureWorld } from './pages/worlds/NatureWorld/nature-world/nature-world';
import { TimeWorld } from './pages/worlds/TimeWorld/time-world/time-world';
import { HungryWorld } from './pages/worlds/HungryWorld/hungry-world/hungry-world';
import { ShurikenWorld } from './pages/worlds/ShurikenWorld/shuriken-world/shuriken-world';
import { DancersWorld } from './pages/worlds/DancersWorld/dancers-world/dancers-world';
import { MovingWorld } from './pages/worlds/MovingWorld/moving-world/moving-world';
import { EyesWorld } from './pages/worlds/EyesWorld/eyes-world/eyes-world';
import { LineWorld } from './pages/worlds/LineWorld/line-world/line-world';
import { ThinWorld } from './pages/worlds/ThinWorld/thin-world/thin-world';
import { CutWorld } from './pages/worlds/CutWorld/cut-world/cut-world';
import { ClonesWorld } from './pages/worlds/ClonesWorld/clones-world/clones-world';
import { ArrowWorld } from './pages/worlds/ArrowWorld/arrow-world/arrow-world';
import { BlobWorld } from './pages/worlds/BlobWorld/blob-world/blob-world';
import { MazeWorld } from './pages/worlds/MazeWorld/maze-world/maze-world';
import { FactoryWorld } from './pages/worlds/FactoryWorld/factory-world/factory-world';
import { ThreeDWorld } from './pages/worlds/ThreeDWorld/three-dworld/three-dworld';

export const routes: Routes = [
  { path: '', redirectTo: 'ClassicWorld', pathMatch: 'full' },

  // Worlds
  { path: 'ClassicWorld', component: ClassicWorld },
  { path: 'DotsWorld', component: DotsWorld },
  { path: 'BarsWorld', component: BarsWorld },
  { path: 'DotsVsBarsWorld', component: DotsVsBarsWorld },
  { path: 'SpinnerWorld', component: SpinnerWorld },
  { path: 'ShapesWorld', component: ShapesWorld },
  { path: 'PolygonsWorld', component: PolygonsWorld },
  { path: '3DWorld', component: ThreeDWorld },
  { path: 'ProgressWorld', component: ProgressWorld },
  { path: 'WobblingWorld', component: WobblingWorld },
  { path: 'InfinityWorld', component: InfinityWorld },
  { path: 'ZigZagWorld', component: ZigZagWorld },
  { path: 'WavyWorld', component: WavyWorld },
  { path: 'MechanicWorld', component: MechanicWorld },
  { path: 'FillingWorld', component: FillingWorld },
  { path: 'BouncingWorld', component: BouncingWorld },
  { path: 'GlowingWorld', component: GlowingWorld },
  { path: 'RollingWorld', component: RollingWorld },
  { path: 'FlippingWorld', component: FlippingWorld },
  { path: 'GrowingWorld', component: GrowingWorld },
  { path: 'ContinuousWorld', component: ContinuousWorld },
  { path: 'PulsingWorld', component: PulsingWorld },
  { path: 'ArcadeWorld', component: ArcadeWorld },
  { path: 'HypnoticWorld', component: HypnoticWorld },
  { path: 'SquareWorld', component: SquareWorld },
  { path: 'CircleWorld', component: CircleWorld },
  { path: 'SquareVsCircleWorld', component: SquareVsCircleWorld },
  { path: 'ColorfulWorld', component: ColorfulWorld },
  { path: 'NatureWorld', component: NatureWorld },
  { path: 'TimeWorld', component: TimeWorld },
  { path: 'HungryWorld', component: HungryWorld },
  { path: 'ShurikenWorld', component: ShurikenWorld },
  { path: 'DancersWorld', component: DancersWorld },
  { path: 'MovingWorld', component: MovingWorld },
  { path: 'EyesWorld', component: EyesWorld },
  { path: 'LineWorld', component: LineWorld },
  { path: 'ThinWorld', component: ThinWorld },
  { path: 'CutWorld', component: CutWorld },
  { path: 'ClonesWorld', component: ClonesWorld },
  { path: 'ArrowWorld', component: ArrowWorld },
  { path: 'BlobWorld', component: BlobWorld },
  { path: 'MazeWorld', component: MazeWorld },
  { path: 'FactoryWorld', component: FactoryWorld },

  // Other pages
  { path: 'shop', component: ShopComponent },
  { path: 'ascend', component: AscendComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },

  // Fallback
  { path: '**', redirectTo: 'ClassicWorld' },
];

