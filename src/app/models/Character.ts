import { Campaign } from './campaign';
import { PgClass } from './pgClass';
import { IPgSkillsCollection, IPgSkill, Iskill } from '../models/pgSkills';

export interface ICharacter{

    _id?:string;
    firstName:string;
    lastName:string;
    campaign:Campaign;
    race:string;
    classes:PgClass[];
    skills: IPgSkillsCollection;
}

export interface ICharacterRequest{
    firstName:string;
    lastName:string;
    campaign:Campaign;
    race:string;
    classes:PgClass[];
    skills: IPgSkill[];
}

