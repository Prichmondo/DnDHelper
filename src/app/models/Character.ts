import { Campaign } from './campaign';
import { PgClass } from './pgClass';
import { IPgSkillsCollection, IPgSkill, Iskill, ISkillRequest } from '../models/pgSkills';
import { IAbilities } from '../models/Abilities';

export interface ICharacter{

    _id?:string;
    firstName:string;
    lastName:string;
    campaign:Campaign;
    race:string;
    classes:PgClass[];
    skills: IPgSkillsCollection;
    abilities: IAbilities;
}

export interface ICharacterRequest{
    firstName:string;
    lastName:string;
    campaign:Campaign;
    race:string;
    classes:PgClass[];
    skills: ISkillRequest[];
}

