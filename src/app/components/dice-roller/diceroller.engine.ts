import { Injectable }   from '@angular/core';

import { Dice }        from '../../models/dice';
import { Roll,
         Totals,
         RollRequest }  from '../../models/roll';
import { DICES }        from '../../mocks/mock-dices';
import { Utilities }    from '../../utilities/app.utilities';

@Injectable()

export class DiceRoller {

    constructor(
        private utils: Utilities,
    ){}
    
    roll(dicesToRoll: RollRequest[]): {tot: number, details: Roll[]}{
        if (dicesToRoll.length === 0){return {tot: 0, details: []}};

        var outputRoll: Roll[] = [];
        var total: number = 0;
        var tmpModifier: number = 0;
        var tmpRoll: number = 0;

        for (var i = 0; i < dicesToRoll.length; i++){
            if (dicesToRoll[i].rolls >= 1){
                for (var iRoll = 0; iRoll < Math.floor(dicesToRoll[i].rolls); iRoll++){
                    tmpModifier = (dicesToRoll[i].modifier && (dicesToRoll[i].modifierIsActiveOnEveryRoll || iRoll === 0)) ? dicesToRoll[i].modifier : 0;
                    tmpRoll = this.utils.getRandomInteger(1, dicesToRoll[i].dice.faces);
                    outputRoll.push({
                        dice: dicesToRoll[i].dice,
                        roll: tmpRoll,
                        modifier: tmpModifier
                        }
                    );
                    total = total + tmpRoll + tmpModifier;
                }
            }

        }
        return {tot: total, details: outputRoll};
    }
}