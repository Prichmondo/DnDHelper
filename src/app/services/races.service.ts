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

    getById(id: string): Observable<Race> {
        return this.http
            .get(this.apiUrl + "/" + id)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }
    
    post(race: Race): Observable<any>{
        return this.http
            .post(this.apiUrl, race)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

    put(race: Race): Observable<Array<Race>> {
        return this.http
            .put(this.apiUrl + "/" + race._id, race)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

    delete(id: string): Observable<Array<Race>> {
        return this.http
            .delete(this.apiUrl + "/" + id)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

}