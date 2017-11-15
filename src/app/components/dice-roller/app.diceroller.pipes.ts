import { Pipe, PipeTransform }  from '@angular/core';

import { Dice, Roll, RollTotal }   from '../../models/dice';


@Pipe({
    name: 'filter_rolls_by_dice',
    pure: false
})

export class RollFilterByDice implements PipeTransform {
    
    transform(rolls: Roll[], filter: Dice): Roll[] {
        if (!rolls || !filter) {
            return rolls;
        }
        return rolls.filter(roll => roll.faces == filter.faces);
    }
}

@Pipe({
    name: 'filter_totals_by_dice',
    pure: true
})

export class TotalFilterByDice implements PipeTransform {
    
    transform(totals: RollTotal[], filter: Dice): RollTotal[] {
        if (!totals || !filter) {
            return totals;
        }
        return totals.filter(total => total.faces == filter.faces);
    }
}