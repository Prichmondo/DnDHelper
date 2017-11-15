import { IAbilities } from './Abilities';


export interface ISpeeds {
    type: string;
    speed: number
}

export interface ISpecialAbilities {
    _id?: string;
    name: string;
    description: string
}

export class Race {
    _id?: string;
    name: string;
    type: string;
    size: string;
    speeds: ISpeeds[];
    abilitiesModifiers: IAbilities
}