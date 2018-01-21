import { Route } from '@angular/router';

export enum NavMenu{
  Main, User, Footer  
}

export enum NavVisibility {
  LoggedIn, LoggedOut, Always   
}

export interface INav{
  name?: string;
  position?: NavMenu;
  visible?: NavVisibility;
  path?: string;
}

export interface AppRoute extends Route {
  nav:INav;
}