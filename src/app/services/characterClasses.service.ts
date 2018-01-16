import { Injectable }               from '@angular/core'
import { Http, Response }           from '@angular/http';
import { HttpService }              from './http.service';
import { Observable }               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IClass, IClassUpdate,
         ISavingThrowsProgression } from '../models/CharacterClass';

@Injectable()
export class CharacterClassService{

    private apiUrl = '/api/character-classes'; 
    
    constructor(
      private http: HttpService
      
      ){}

    get(): Observable<Array<IClass>> {
        return this.http
            .get(this.apiUrl)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

    delete(id:string): Observable<Array<IClass>> {
        return this.http
            .delete(this.apiUrl + "/" + id)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }
    
    post(characterClass :IClassUpdate): Observable<any> {
        return this.http
            .post(this.apiUrl, characterClass)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            })
    }
    
    getById(id:string): Observable<Array<IClass>> {
        return this.http
            .get(this.apiUrl + "/" + id)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    
    } 
    
    update(characterClass :IClassUpdate): Observable<any> {
        return this.http
            .put(this.apiUrl + "/" + characterClass._id, characterClass)
            .map((res: Response)=>{
                let body = res.json();
                return body || { };
            })

    }

    mapForUpdate(inputCharacter: IClass): IClassUpdate {
        if (!inputCharacter){return null}
        var oputputCharacter: IClassUpdate = {
            _id: inputCharacter._id,
            name: inputCharacter.name,
            levels: inputCharacter.levels,
            savingThrows: inputCharacter.savingThrows,
            baseAttackBonus: inputCharacter.baseAttackBonus,
            type: inputCharacter.type,
            hitDice: inputCharacter.hitDice,
            skills: [],
            classLevels: [{}]
        };
        
        for (var i = 0; i < inputCharacter.classLevels.length; i++){
            for (var j = 0; j < inputCharacter.classLevels[i].specials.length; j++){
                oputputCharacter.classLevels[i].specials.push(inputCharacter.classLevels[i].specials[j]._id);
            }
        }

        return oputputCharacter;
    }
}