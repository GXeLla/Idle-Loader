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
  constructor(
    public settings: SettingsService,
    private save: SaveService,
  ) {}

  /** Give all worlds 10 coins */
  cheatCoins() {
    this.save.giveCheatCoins();
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
