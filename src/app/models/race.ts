import { IAbilities } from './Abilities';


export interface ISpeeds {
    name: string;
    value: number
}

export class Race {
    _id?: string;
    name: string;
    type: string;
    size: string;
    speeds: ISpeeds[];
    abilitiesModifiers: IAbilities
}