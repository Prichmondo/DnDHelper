import { Injectable } from '@angular/core';
import { Router, CanActivate, CanDeactivate } from '@angular/router';

import { AuthenticationService } from './authentication.service';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(
        private router: Router,
        private authService: AuthenticationService
    ) { }
 
    canActivate() {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}

@Injectable()
export class Anonymus implements CanActivate {
 
    constructor(
        private router: Router,
        private authService: AuthenticationService
    ) { }
 
    canActivate() {
        if (!this.authService.isLoggedIn()) {
            return true;
        }
        
        // not logged in so redirect to login page
        this.router.navigate(['/']);
        return false;
    }
}