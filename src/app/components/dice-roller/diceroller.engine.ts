import { Injectable }   from '@angular/core';

import { Dice,
         Roll,
         RollTotal,
         RollRequest }  from '../../models/dice';
import { DICES }        from '../../mocks/mock-dices';

import { Utilities }    from '../../utilities/app.utilities';

@Injectable()

export class DiceRoller {

    constructor(
        private utils: Utilities,
    ){}
    
    roll(dicesToRoll: RollRequest[]): {tot: number, details: Roll[]}{
        console.log(dicesToRoll);
        if (typeof dicesToRoll === 'object') {dicesToRoll = [].concat(dicesToRoll)};
        if (dicesToRoll.length === 0){return {tot: 0, details: []}};

        var outputRoll: Roll[] = [];
        var total: number = 0;
        var tmpModifier: number = 0;
        var tmpRoll: number = 0;

        for (var i = 0; i < dicesToRoll.length; i++){
            if (dicesToRoll[i].throws >= 1){
                for (var iRoll = 0; iRoll < Math.floor(dicesToRoll[i].throws); iRoll++){
                    tmpModifier = (dicesToRoll[i].modifier && (dicesToRoll[i].modifierIsActiveOnEveryRoll || iRoll === 0)) ? dicesToRoll[i].modifier : 0;
                    tmpRoll = this.utils.getRandomInteger(1, dicesToRoll[i].faces);
                    outputRoll.push({
                        faces: dicesToRoll[i].faces,
                        roll: tmpRoll,
                        modifier: tmpModifier
                        }
                    );
                    total = total + tmpRoll + tmpModifier;
                }
            }

        }
        console.log(total, outputRoll);
        return {tot: total, details: outputRoll};
    }

    calculateTotals(inputRolls: Roll[], dicesSet?: Dice[]): {tot: number, totalsByDice: RollTotal[]}{
        if (typeof inputRolls === 'object') {inputRolls = [].concat(inputRolls)};
        var iDices = 0;
        var iRolls = 0;
        if (!dicesSet && inputRolls.length > 0){//dinamically creating dices set
            dicesSet = [];
            var isDiceToAdd: boolean;
            for (iRolls = 0; iRolls < inputRolls.length; iRolls++){
                isDiceToAdd = true;
                for (iDices = 0; iDices < dicesSet.length; iDices++){
                    if (inputRolls[iRolls].faces === dicesSet[iDices].faces){isDiceToAdd = false}
                }
                if (isDiceToAdd) {dicesSet.push({faces: inputRolls[iRolls].faces})}
            }
        }
        console.log(dicesSet);

        var totals: RollTotal[] = [];
        var totalRollOnTable: number = 0;
        if (inputRolls.length > 0 && dicesSet.length > 0) {
            var diceCounter = 0;
            dicesSet.forEach(dice => {
                totals.push({
                    faces: dice.faces,
                    totalRoll: 0,
                    totalModifier: 0,
                    total: 0,
                    luck: 0
                })
            });

            for (iDices = 0; iDices < dicesSet.length; iDices++){
                for (iRolls = 0, diceCounter = 0; iRolls < inputRolls.length; iRolls++){
                    if (inputRolls[iRolls].faces === totals[iDices].faces){
                        diceCounter ++;
                        totals[iDices].totalRoll += inputRolls[iRolls].roll;
                        totals[iDices].totalModifier += inputRolls[iRolls].modifier;
                        totals[iDices].total += (inputRolls[iRolls].roll + inputRolls[iRolls].modifier);
                        totals[iDices].luck = this.calculateLuck(totals[iDices].faces, diceCounter, totals[iDices].totalRoll);
                        totalRollOnTable += (inputRolls[iRolls].roll + inputRolls[iRolls].modifier);
                    }
                }
            }
        }
        return {tot: totalRollOnTable, totalsByDice: totals};
    }

    calculateLuck(faces: number, throws: number, result: number): number {
        if (faces < 2               ||
            throws < 1              ||
            result < throws         ||
            result > faces * throws){
            console.log("Wrong values passed to calculateLuck function" + faces + " " + throws + " " + result);
            return -1;
        }

        return Math.round((result - throws) / ((faces -1) * throws) * 100);
    }
}