import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
    Http,
    RequestOptions,
    RequestOptionsArgs,
    Response,
    Request,
    Headers,
    XHRBackend
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { AuthenticationService } from '../services/authentication.service'
import { AppRequestOptions } from '../helpers/app.requestOptions';

@Injectable ()
export class HttpService extends Http {
    
    constructor(
        backend: XHRBackend,
        defaultOptions: RequestOptions,
        private authService: AuthenticationService,
        private router: Router
        ) {
            super(backend, defaultOptions);
        }
    
    private setCustomHeaders(options: RequestOptionsArgs = { headers: new Headers() }){
        var token = this.authService.getToken();
        if(token){
            options.headers.append("Authorization", `Bearer ${token}`);
        }
        return options;
    }

    httpErrorHandler(error: Response) {
        switch(error.status){
            case 401:
            case 403:
                console.log('The authentication session expires or the user is not authorised');
                location.href = "/login"
                //this.router.navigate(['/login']);
        }
        return Observable.throw(error);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response>{
        return super.request(url, options)
            .catch(this.httpErrorHandler);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        console.log("get", url);
        var customOptions = this.setCustomHeaders(options);
        return super.get(url, customOptions);
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        console.log("post", url);
        var customOptions = this.setCustomHeaders(options);
        return super.post(url, body, customOptions);
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>{
        console.log("put", url);
        var customOptions = this.setCustomHeaders(options);
        return super.put(url, body, customOptions);
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response>{
        console.log("delete", url);
        var customOptions = this.setCustomHeaders(options);
        return super.delete(url, customOptions);
    }

    patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response>{
        var customOptions = this.setCustomHeaders(options);
        return super.patch(url, body, customOptions)
    }

    head(url: string, options?: RequestOptionsArgs): Observable<Response>{
        var customOptions = this.setCustomHeaders(options);
        return super.head(url, options)
    }

    options(url: string, options?: RequestOptionsArgs): Observable<Response>{
        var customOptions = this.setCustomHeaders(options);
        return super.options(url, options)
    }
}