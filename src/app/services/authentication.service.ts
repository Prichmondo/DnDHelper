import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LocalStoreManagerService, LocalKey } from './localStoreManager.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ILoginForm } from '../models/ILoginForm';
/*
export interface ILoginForm{
    username: string;
    password: string;
}*/

@Injectable()
export class AuthenticationService{

    private apiUrl = '/api/auth'; 
    
    constructor(
      private http: Http, 
      private localStore: LocalStoreManagerService
      ){}

    login(loginForm: ILoginForm): Observable<any> {
        return this.http
            .post(this.apiUrl + "/login", loginForm)
            .map((res: Response) => {
                let body = res.json();
                this.localStore.set(LocalKey.JWToken, body.token);
                return body || { };
            });
    }
    
    private getPaylodData(token: string): any{
      
      var payload;

      payload = token.split('.')[1];
      payload = window.atob(payload);
      payload = JSON.parse(payload);
      
      if(payload) return payload

      return payload;

    }

    getToken(): string {
      return this.localStore.get(LocalKey.JWToken);
    }

    isLoggedIn() {
      var token = this.getToken();
      if(!token) return false;
      return true;
    };

    currentUser() {
      if(this.isLoggedIn()){
        
        var token = this.getToken();
        var payload = this.getPaylodData(token);

        return {
          username : payload.username
        };
      }
};

}