import { Pipe, PipeTransform }  from '@angular/core';

import { Dice }                 from '../../models/dice';
import { Roll, Totals }         from '../../models/roll';


@Pipe({
    name: 'filter_rolls_by_dice',
    pure: false
})

export class RollFilterByDice implements PipeTransform {
    
    transform(rolls: Roll[], filter: Dice): Roll[] {
        if (!rolls || !filter) {
            return rolls;
        }
        return rolls.filter(roll => roll.dice.faces == filter.faces);
    }
}

@Pipe({
    name: 'filter_totals_by_dice',
    pure: true
})

export class TotalFilterByDice implements PipeTransform {
    
    transform(totals: Totals[], filter: Dice): Totals[] {
        if (!totals || !filter) {
            return totals;
        }
        return totals.filter(total => total.dice.faces == filter.faces);
    }
}