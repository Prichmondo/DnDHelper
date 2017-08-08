export interface ISaveThrows{
    fortitude: string;
    reflex: string;
    will: string;
};

export interface IClass{

    _id?:string;
    name:string;
    levels:number;
    savingThrows:ISaveThrows;
    baseAttackBonus:string;
    type:string;
    hitDice:number;
    skills:any[];
    specials:any[];
}