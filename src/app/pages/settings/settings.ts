import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../core/services/settings';
import { SaveService } from '../../core/services/save';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.html',
  styleUrls: ['./settings.scss'],
})
export class SettingsComponent {
  cheatMode = false;
  constructor(
    public settings: SettingsService,
    private save: SaveService,
  ) {}

  cheatText = 'Cheat Mode';
  cheatActive = false;
  /** Give all worlds 10 coins */
  cheatCoins() {
    // prevent spam while active
    if (this.cheatActive) return;

    this.cheatActive = true;
    this.cheatText = '+10';

    // your game logic
    this.save.giveCheatCoins();

  // remove flash after 1s
  setTimeout(() => {
    this.cheatActive = false;
    this.cheatText = 'Cheat Mode';
  }, 1000);
  }

  /** Reset all progress */
  resetProgress() {
    if (confirm('Are you sure you want to reset all progress?')) {
      this.save.resetProgress();
      alert('🧹 Progress reset!');
      location.reload(); // refresh UI
    }
  }
}
