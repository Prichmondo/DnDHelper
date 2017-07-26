export interface IAbilities {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number
}

export class Race {
    _id?: string;
    name: string;
    type: string;
    size: string;
    abilitiesModifiers: IAbilities;
}