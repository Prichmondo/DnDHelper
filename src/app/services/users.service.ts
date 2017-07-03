import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LocalStoreManagerService, LocalKey } from './localStoreManager.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ILoginForm } from '../models/ILoginForm';

@Injectable()
export class UsersService{

    private apiUrl = '/api/users'; 
    
    constructor(
      private http: Http, 
      private localStore: LocalStoreManagerService,
      private router: Router
      ){}

    register(loginForm: ILoginForm): Observable<any> {
        return this.http
            .post(this.apiUrl, loginForm)
            .map((res: Response) => {
                let body = res.json();
                this.localStore.set(LocalKey.JWToken, body.token);
                return body || { };
            });
    }

}