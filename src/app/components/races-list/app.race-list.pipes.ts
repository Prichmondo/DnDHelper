import { Pipe, PipeTransform }                      from '@angular/core';

import { Race, Size, IAbilities }                   from '../../models/race';
import { RACES }                                    from '../../mocks/mock-races';
import { Utilities }                                from '../../utilities/app.utilities';


@Pipe({
    name: 'format_race_size',
    pure: false
})

export class FormatRaceSize implements PipeTransform {
    
    transform(size: Size): string {
        if (!size) {
            return "";
        }
        return Size[size];
    }
}

@Pipe({
    name: 'format_race_abilities',
    pure: false
})

export class FormatRaceAbilities implements PipeTransform {
    
    utils = new Utilities;

    transform(abilities: IAbilities): string[] {
        if (!abilities) {
            return [];
        }
        var formattedAbilities: string[] = [];
        var count: number = 0;
        if (abilities.strength != 0) {
            count += 1;
            formattedAbilities.push("STR: " + this.utils.formatNumberAsTextFroceSign(abilities.strength));
        }
        if (abilities.dexterity != 0) {
            count += 1;
            formattedAbilities.push("DEX: " + this.utils.formatNumberAsTextFroceSign(abilities.dexterity));
        }
        if (abilities.constitution != 0) {
            count += 1;
            formattedAbilities.push("CON: " + this.utils.formatNumberAsTextFroceSign(abilities.constitution));
        }
        if (abilities.intelligence != 0) {
            count += 1;
            formattedAbilities.push("INT: " + this.utils.formatNumberAsTextFroceSign(abilities.intelligence));
        }
        if (abilities.wisdom != 0) {
            count += 1;
            formattedAbilities.push("WIS: " + this.utils.formatNumberAsTextFroceSign(abilities.wisdom));
        }
        if (abilities.charisma != 0) {
            count += 1;
            formattedAbilities.push("CHA: " + this.utils.formatNumberAsTextFroceSign(abilities.charisma));
        }
        return formattedAbilities;
    }
}