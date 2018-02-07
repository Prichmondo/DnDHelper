import { Injectable }               from '@angular/core'
import { Http, Response }           from '@angular/http';
import { HttpService }              from './http.service';
import { Observable }               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IClass, IClassUpdate,
         ISavingThrowsProgression,
         ILevel, ILevelUpdate }     from '../models/CharacterClass';

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

    mapForUpdate(inputClass: IClass): IClassUpdate {
        
        if (!inputClass) return null;
        
        if (inputClass.classLevels.length > inputClass.levels){
            inputClass.classLevels
                .splice(inputClass.levels, inputClass.classLevels.length - inputClass.levels);
        }

        var oputputClass: IClassUpdate = {
            _id: inputClass._id,
            name: inputClass.name,
            levels: inputClass.levels,
            savingThrows: inputClass.savingThrows,
            baseAttackBonus: inputClass.baseAttackBonus,
            type: inputClass.type,
            hitDice: inputClass.hitDice,
            skills: [],
            classLevels: inputClass.classLevels.map(lvl => {
                
                if(lvl===null || typeof lvl === "undefined")
                    return { specials:[] };

                return { 
                    specials: lvl.specials.map(s => s._id) 
                };
            })
        };
        
        return oputputClass;
    }
}