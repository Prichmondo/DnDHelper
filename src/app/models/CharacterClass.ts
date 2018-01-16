import { ISpecialAbility }      from './specialAbility';

export interface ISavingThrowsProgression {
    fortitude: string,
    reflex: string,
    will: string
}

export interface IClass{

    _id?: string;
    name: string;
    levels: number;
    baseAttackBonus: string;
    savingThrows: ISavingThrowsProgression;
    type: string;
    hitDice: number;
    skills?: any[];
    classLevels?: [
        {
            specials?: ISpecialAbility[]
        }
    ]
};

export interface IClassUpdate{

    _id?: string;
    name: string;
    levels: number;
    baseAttackBonus: string;
    savingThrows: ISavingThrowsProgression;
    type: string;
    hitDice: number;
    skills?: any[];
    classLevels?: [
        {
            specials?: string[]
        }
    ]
};
