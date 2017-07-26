import { Injectable }       from '@angular/core'
import { Http, Response }   from '@angular/http';
import { HttpService }      from './http.service';
import { Observable }       from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Race }             from '../models/race';

@Injectable()
export class RacesService{

    private apiUrl = '/api/races';
    
    constructor(
      private http: HttpService
      ){}

    get(): Observable<Race[]> {
        return this.http
            .get(this.apiUrl)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

}