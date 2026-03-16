import { Upgrade } from '../models/upgrade.model';

export const UPGRADES: Upgrade[] = [
  {
    id: 'double_miners',
    name: 'Stronger Miners',
    description: 'Miners produce 2x coins',
    cost: 500,
    multiplier: 2,
    purchased: false,
  },
  {
    id: 'super_drills',
    name: 'Super Drills',
    description: 'Drills produce 2x coins',
    cost: 2000,
    multiplier: 2,
    purchased: false,
  },
];
