import { Injectable }       from '@angular/core'
import { Http, Response }   from '@angular/http';
import { HttpService }      from './http.service';
import { Observable }       from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ISpecialAbilities }             from '../models/race';

@Injectable()
export class SpecialAbilitiesService{

    private apiUrl = '/api/specials';
    
    constructor(
      private http: HttpService
      ){}

    get(): Observable<ISpecialAbilities[]> {
        return this.http
            .get(this.apiUrl)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

    getById(id: string): Observable<ISpecialAbilities> {
        return this.http
            .get(this.apiUrl + "/" + id)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }
    
    post(special: ISpecialAbilities): Observable<any>{
        return this.http
            .post(this.apiUrl, special)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

    put(special: ISpecialAbilities): Observable<Array<ISpecialAbilities>> {
        return this.http
            .put(this.apiUrl + "/" + special._id, special)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

    delete(id: string): Observable<Array<ISpecialAbilities>> {
        return this.http
            .delete(this.apiUrl + "/" + id)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

}