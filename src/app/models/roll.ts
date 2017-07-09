import { Dice } from './dice';

export class Roll{
    dice: Dice;
    modifier: number;
    roll: number;
}

export class Totals{
  dice: Dice;
  totalRoll: number;
  totalModifier: number;
  total: number;
}
