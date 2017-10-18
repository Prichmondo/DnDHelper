import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { IRulebook } from '../models/rulebook';

@Injectable()
export class RulebookService{

    private apiUrl = '/api/rulebook'; 
    
    constructor(
      private http: HttpService
      ){}

    get(): Observable<IRulebook> {
        return this.http
            .get(this.apiUrl)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

}