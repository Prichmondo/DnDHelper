import { Component, OnInit }  from '@angular/core';
import { AppRoutingModule }   from './app.routing.module';
import { Routes, Router } from '@angular/router';

import { AppRoute, NavMenu, NavVisibility } from './models/AppRoute';
import { AuthenticationService } from './services/authentication.service';
import { Broadcaster } from './services/broadcast';
import { AppNav, INav } from './services/app.nav.service'

@Component({
  selector: 'site-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  title = "Helper v1.0";
  isLoggedIn: boolean = false;
  main: INav[];
  selected: INav = null;
  isLoggedin: boolean = false;
  userEmail:  string; 

  constructor(
    private appNav: AppNav,
    private authService: AuthenticationService,
    private broadcaster: Broadcaster,
    private router: Router
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

    this.main = this.appNav.main.filter(n => {
      return (
        n.visible === NavVisibility.Always ||
        n.visible === NavVisibility.LoggedIn && this.isLoggedin ||
        n.visible === NavVisibility.LoggedOut && !this.isLoggedin
      )
    })
    
  }

  onMenuClick(nav:INav){
    if(nav.children && nav.children.length>0){
      
      if(this.selected === nav)
        this.selected = null;
      else 
        this.selected = nav

    } else {
      this.selected = null;
      this.router.navigate([nav.path]);
    }
  }

  ngOnInit(){

    this.broadcaster
      .on<boolean>('login')
      .subscribe(this.onLogin);
    
    this.init();
  }
}