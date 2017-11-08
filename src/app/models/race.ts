export interface IAbilities {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number
}

export interface ISpeeds {
    type: string;
    speed: number
}

export class Race {
    _id?: string;
    name: string;
    type: string;
    size: string;
    speeds: ISpeeds[];
    abilitiesModifiers: IAbilities
}