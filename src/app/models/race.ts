export interface IAbilities {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number
}

export enum Size {
    Thiny, Small, Medium, Large, Huge, Gargantuan, Colossal
}

export class Race {
    _id?: string;
    name: string;
    type: string;
    size: Size;
    abilitiesModifiers: IAbilities;
}