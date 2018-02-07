import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ICharacter, ICharacterRequest } from '../models/Character';

@Injectable()
export class CharactersService{

    private apiUrl = '/api/characters'; 
    
    constructor(
      private http: HttpService
      ){}

    get(): Observable<Array<ICharacter>> {
        return this.http
            .get(this.apiUrl)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

    put(id: string, character: ICharacterRequest): Observable<ICharacter> {

        return this.http
            .put(this.apiUrl + "/" + id, character)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

    delete(id: string): Observable<Array<ICharacter>> {
        return this.http
            .delete(this.apiUrl + "/" + id)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }


}