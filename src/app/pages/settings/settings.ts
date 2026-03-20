import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../core/services/settings';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.html',
  styleUrls: ['./settings.scss']
})
export class SettingsComponent {
  constructor(public settings: SettingsService) {}
}


// const save = JSON.parse(localStorage.getItem('idle_clicker_save'));

// Object.keys(save.players).forEach(worldId => {
//   const player = save.players[worldId];

//   Object.keys(player.currencies).forEach(currency => {
//     player.currencies[currency] = 10;
//   });
// });

// localStorage.setItem('idle_clicker_save', JSON.stringify(save));
// console.log('💰 Gave coins to ALL worlds');

// location.reload();
