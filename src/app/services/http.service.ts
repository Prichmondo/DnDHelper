import { Injectable } from '@angular/core';
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
        defaultOptions: AppRequestOptions,
        private authService: AuthenticationService
        ) {
            super(backend, defaultOptions);
        }
    
    private setCustomHeaders(options: RequestOptionsArgs){
        var token = this.authService.getToken();
        if(token){
            options.headers.append("Authorization", `Bearer ${token}`);
        }
        return options;
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response>{
        console.log("request", url, options);
        return super.request(url, options)
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