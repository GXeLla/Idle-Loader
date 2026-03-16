import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './layout/sidebar/sidebar';
import { GameEngineService } from './core/services/game-engine';
import { NavbarComponent } from "./layout/navbar/navbar";
import { RouterOutlet } from "@angular/router";
import { OfflineModalComponent } from "./shared/components/offline-modal/offline-modal";
import { SettingsService } from './core/services/settings';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavbarComponent, RouterOutlet, OfflineModalComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {
  constructor(
    private engine: GameEngineService,
    public settings: SettingsService 
  ) {}

  ngOnInit() {
    this.engine.start(); // start timers and offline gains
  }
}
