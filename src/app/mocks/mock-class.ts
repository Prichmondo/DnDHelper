import { IClass, AttackBonusProgress,SaveThrowsProgress,ISaveThrows } from '../models/CharacterClass';


export const fighterMock:IClass[]=[

    {
        name:"Fighter",
        levels:20,
        saveThrows: {
            fortitude: SaveThrowsProgress.Fast,
            reflexes: SaveThrowsProgress.Slow,
            will: SaveThrowsProgress.Slow         
        },
        attackBonus: AttackBonusProgress.Fast

    }


]