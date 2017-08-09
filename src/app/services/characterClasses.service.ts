import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IClass } from '../models/CharacterClass';

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
    
    post(characterClass :IClass): Observable<any> {
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
    
    update(characterClass :IClass): Observable<any> {
        return this.http
            .put(this.apiUrl + "/" + characterClass._id, characterClass)
            .map((res: Response)=>{
                let body = res.json();
                return body || { };
            })

    }
}