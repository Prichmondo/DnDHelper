export interface Iskill{
    
    _id?: number;
    name: string;
    modifier: string;
    trainedOnly: boolean;
    synergies?: any; 
}

export interface IPgSkill extends Iskill{
     rank: number;
}

export interface IPgSkillsCollection {
    [key: string]: IPgSkill
}

export interface ISkillRequest {
    
    skill: string;
    rank: number;
}