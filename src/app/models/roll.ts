import { Dice } from './dice';

export class Roll{
    dice: Dice;
    modifier?: number;
    roll: number;
}

export class RollRequest{
  dice: Dice;
  rolls: number;
  modifier?: number;
  modifierIsActiveOnEveryRoll?: boolean;
}

export class Totals{
  dice: Dice;
  totalRoll: number;
  totalModifier: number;
  total: number;
  luck: number;
}
