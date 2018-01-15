import { Injectable }       from '@angular/core'
import { Http, Response }   from '@angular/http';
import { HttpService }      from './http.service';
import { Observable }       from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ISpecialAbility }             from '../models/specialAbility';

@Injectable()
export class SpecialAbilitiesService{

    private apiUrl = '/api/specials';
    
    constructor(
      private http: HttpService
      ){}

    get(): Observable<ISpecialAbility[]> {
        return this.http
            .get(this.apiUrl)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

    getById(id: string): Observable<ISpecialAbility> {
        return this.http
            .get(this.apiUrl + "/" + id)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }
    
    post(special: ISpecialAbility): Observable<any>{
        return this.http
            .post(this.apiUrl, special)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

    put(special: ISpecialAbility): Observable<Array<ISpecialAbility>> {
        return this.http
            .put(this.apiUrl + "/" + special._id, special)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

    delete(id: string): Observable<Array<ISpecialAbility>> {
        return this.http
            .delete(this.apiUrl + "/" + id)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

}