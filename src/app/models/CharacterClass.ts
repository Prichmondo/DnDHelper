export enum SaveThrowsProgress{
    Slow, Fast
};
export enum AttackBonusProgress{
    Slow, Medium, Fast
};
export interface ISaveThrows{

    fortitude: SaveThrowsProgress;
    reflexes: SaveThrowsProgress;
    will: SaveThrowsProgress;
};

export interface IClass{

    _id?:string;
    name:string;
    levels:number;
    saveThrows:ISaveThrows;
    attackBonus:AttackBonusProgress;
}