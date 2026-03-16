import { Currency } from './currency.model';
import { Statistics } from './statistics.model';
import { Building } from './building.model';

export interface Player {
  currency: Currency;
  buildings: Building[];
  statistics: Statistics;
}
