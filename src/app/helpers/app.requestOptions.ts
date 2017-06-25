import { BaseRequestOptions } from '@angular/http';
import { Inject, Injectable } from '@angular/core';

Injectable()
export class AppRequestOptions extends BaseRequestOptions {

    public token: string;
    
    constructor () {
        super();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.token );        
            
    }
}