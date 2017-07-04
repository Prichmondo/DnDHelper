import { Pipe, PipeTransform }  from '@angular/core';

import { Dice }                 from '../models/dice';

@Pipe({
    name: 'rollfilter',
    pure: false
})

export class RollFilterPipe implements PipeTransform {
    transform(items: Dice[], filter: Dice): Dice[] {
        if (!items || !filter) {
        return items;
        }
    return items;
    }
}