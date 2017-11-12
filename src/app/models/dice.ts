export class Dice {
    faces: number;
}

export class Roll implements Dice{
    faces: number;
    modifier?: number;
    roll: number;
    luck?: number;
}

export class RollRequest implements Dice{
    faces: number;
    throws: number;
    modifier?: number;
    modifierIsActiveOnEveryRoll?: boolean;
}

export class RollTotal implements Dice{
    faces: number;
    totalRoll: number;
    totalModifier: number;
    total: number;
    luck?: number;
}