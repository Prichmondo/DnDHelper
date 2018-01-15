import { Injectable } from '@angular/core';

import { Utilities } from './app.utilities';

@Injectable()


export class DnDUtilities{

    constructor(
        private utils: Utilities,
    ){}
    
    calculateBaseAttack(lvl: number, progression: string): number{
        if (!lvl || !progression){ return};

        switch(progression.toLocaleLowerCase()) {
            case "slow":
                return Math.floor(lvl * 0.5);
            case "medium":
                return Math.floor(lvl * 0.75);
            case "fast":
                return Math.floor(lvl);
        }
    }

    calculateAllAttackBonuses(baseAttack: number): number[]{
        var tmpBaseAttacks: number[] = [];
        for (var i = 0; i < Math.floor(baseAttack / 5) +1; i++){
            if (i === 0 || baseAttack - (5 * i) > 0) {
                tmpBaseAttacks.push(baseAttack - (5 * i));
            }
        }
        return tmpBaseAttacks;
    }

    calculateSavingThrow(lvl: number, progression: string): number{
        if (!lvl || !progression){ return};

        switch(progression.toLocaleLowerCase()) {
            case "slow":
                return Math.floor(lvl / 3);
            case "fast":
                return Math.floor((lvl / 2) +2);
        }
    }
}