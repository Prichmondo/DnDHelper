import { IAbilities }           from './Abilities';
import { ISpecialAbility }      from './specialAbility';

export interface ISpeeds {
    type: string;
    speed: number
}

export interface IRace {
    _id?: string;
    name: string;
    type: string;
    size: string;
    speeds: ISpeeds[];
    abilitiesModifiers: IAbilities;
    specials?: ISpecialAbility[];
}

export interface IRaceUpdate {
    _id?: string;
    name: string;
    type: string;
    size: string;
    speeds: ISpeeds[];
    abilitiesModifiers: IAbilities;
    specials?: string[];
}