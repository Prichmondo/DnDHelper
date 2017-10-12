import { Injectable }       from '@angular/core'
import { Http, Response }   from '@angular/http';
import { HttpService }      from './http.service';
import { Observable }       from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Iskill }         from '../models/pgSkills'


@Injectable()
export class PgSkillsService{

    private apiUrl = '/api/skills'; 
    
    constructor(
      private http: HttpService
      
      ){}

    get(): Observable<Array<Iskill>> {
        return this.http
            .get(this.apiUrl)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }
}