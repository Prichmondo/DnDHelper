import { Campaign } from './campaign';
import { PgClass } from './pgClass';
import { IPgSkillsCollection, IPgSkill, Iskill, ISkillRequest } from '../models/pgSkills';
import { IAbilities, IAbilitiesCharacter } from '../models/Abilities';

export interface ICharacter{
    _id?:string;
    name:string;
    race:string;
    classes:string;    
    alignment:string;
    deity:string;
    size:string;
    age:number;
    gender:string;
    height:number;
    weight:number;
    eyes: string;
    heir: string;
    skin:string;
    hitPoints:number;
    campaign:Campaign;
    skills: IPgSkillsCollection;
    abilities: IAbilitiesCharacter;
}

export interface ICharacterRequest{
    name:string;
    race:string;
    classes:string;    
    alignment:string;
    deity:string;
    size:string;
    age:number;
    gender:string;
    height:number;
    weight:number;
    eyes: string;
    heir: string;
    skin:string;
    hitPoints:number;
    skills: ISkillRequest[];
}

