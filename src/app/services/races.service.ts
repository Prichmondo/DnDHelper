import { Injectable }           from '@angular/core'
import { Http, Response }       from '@angular/http';
import { HttpService }          from './http.service';
import { Observable }           from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IRace, IRaceUpdate }   from '../models/race';

@Injectable()
export class RacesService{

    private apiUrl = '/api/races';
    
    constructor(
      private http: HttpService
      ){}

    get(): Observable<IRace[]> {
        return this.http
            .get(this.apiUrl)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

    getById(id: string): Observable<IRace> {
        return this.http
            .get(this.apiUrl + "/" + id)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }
    
    post(race: IRaceUpdate): Observable<any>{
        return this.http
            .post(this.apiUrl, race)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

    put(race: IRaceUpdate): Observable<Array<IRace>> {
        return this.http
            .put(this.apiUrl + "/" + race._id, race)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

    delete(id: string): Observable<Array<IRace>> {
        return this.http
            .delete(this.apiUrl + "/" + id)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

    mapForUpdate(inputRace: IRace): IRaceUpdate {
        if (!inputRace) return null;

        var outputRace: IRaceUpdate;
        if (!inputRace.specials || inputRace.specials.length === 0) {
            inputRace.specials = [];
        }

        outputRace = {
            _id: (inputRace._id ? inputRace._id : null),
            name: inputRace.name,
            type: inputRace.type,
            size: inputRace.size,
            speeds: inputRace.speeds.filter(speed => (speed.speed > 0)),
            abilitiesModifiers: inputRace.abilitiesModifiers,
            specials: inputRace.specials.map(s => s._id)
        };
        return outputRace;
    }

}