import { Building } from '../models/building.model';

export const BUILDINGS: Building[] = [
  {
    id: 'miner',
    name: 'Miner',
    level: 1,
    owned: 0,
    baseCost: 10,
    production: 1,
  },
  {
    id: 'drill',
    name: 'Drill',
    level: 1,
    owned: 0,
    baseCost: 100,
    production: 10,
  },
  {
    id: 'factory',
    name: 'Factory',
    level: 1,
    owned: 0,
    baseCost: 1000,
    production: 100,
  },
];
