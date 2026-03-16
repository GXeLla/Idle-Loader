import { Building } from '../models/building.model';

export function calculateProduction(buildings: Building[]): number {
  let total = 0;

  for (const building of buildings) {
    total += building.owned * building.production;
  }

  return total;
}
