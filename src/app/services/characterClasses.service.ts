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

}