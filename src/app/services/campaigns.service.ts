import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { HttpService } from './http.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Campaign } from '../models/Campaign';

@Injectable()
export class CampaignsService{

    private apiUrl = '/api/campaigns'; 
    
    constructor(
      private http: HttpService
      ){}

    get(): Observable<Campaign[]> {
        return this.http
            .get(this.apiUrl)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

    getById(id:string): Observable<Campaign> {
        return this.http
            .get(this.apiUrl + "/" + id)
            .map((res: Response) => {
                let body = res.json();
                return body || { };
            });
    }

}