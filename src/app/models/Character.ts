import { Campaign } from './campaign';
import { PgClass } from './pgClass';

export interface ICharacter{

    _id?:string;
    firstName:string;
    lastName:string;
    campaign:Campaign;
    race:string;
    classes:PgClass[];
    

}