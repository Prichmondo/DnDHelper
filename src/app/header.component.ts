import { Component, OnInit }  from '@angular/core';
import { AppRoutingModule }   from './app.routing.module';
import { Routes } from '@angular/router';

import { AppRoute, NavMenu, NavVisibility } from './models/AppRoute';
import { AuthenticationService } from './services/authentication.service';
import { Broadcaster } from './services/broadcast';

@Component({
  selector: 'site-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title = "Helper v1.0";
  isLoggedIn: boolean = false;
  mainRoutes: AppRoute[] = [];
  userRoutes: AppRoute[] = [];
  isLoggedin: boolean = false;
  userEmail:  string; 

  constructor( 
    private authService: AuthenticationService,
    private broadcaster: Broadcaster
    ){}

  onLogout(){
    this.authService.logout();
    this.init();
  }

  onLogin = (success) => {
    if(success){
      this.init();
    }
  }

  init(){
    
    var routes = AppRoutingModule.routes as AppRoute[];
    this.isLoggedin = this.authService.isLoggedIn();
    this.userEmail = this.isLoggedin ? this.authService.currentUser().username : ""
    this.userRoutes = [];
    this.mainRoutes = [];

    for(let i=0, route: AppRoute; i<routes.length; i++){
      route = routes[i];

      if(route.nav){
        if(
          route.nav.visible === NavVisibility.Always ||
          route.nav.visible === NavVisibility.LoggedIn && this.isLoggedin ||
          route.nav.visible === NavVisibility.LoggedOut && !this.isLoggedin
        ){
        
          if(route.nav.position === NavMenu.User){
            this.userRoutes.push(route);
          }

          if(route.nav.position === NavMenu.Main){
            this.mainRoutes.push(route);
          }        
        }
      }            
    }
  }

  ngOnInit(){

    this.broadcaster
      .on<boolean>('login')
      .subscribe(this.onLogin);
    
    this.init();
  }
}