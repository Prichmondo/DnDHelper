import { Injectable } from '@angular/core'
import { PATHS } from '../app.paths';

export enum NavVisibility {
  LoggedIn, LoggedOut, Always   
}

export interface INav {
  name?: string;
  path?: string;
  visible: NavVisibility;
  children: INav[];
}

export interface IAppNav {
  user: INav[];
  main: INav[];
  footer: INav[];
}

@Injectable()
export class AppNav implements IAppNav{
  user = [];
  main = [
    { name: 'Home',           path: PATHS.HOME,             visible: NavVisibility.Always,  children: [] },
    { name: 'Dice Roller',    path: PATHS.DICE_ROLLER,      visible: NavVisibility.Always,    children: [] },
    { name: 'Characters',     path: PATHS.PARTY_EDITOR,     visible: NavVisibility.LoggedIn,  children: [] },
    { name: 'Inititative',    path: PATHS.INIT_MANAGER,     visible: NavVisibility.Always,    children: [] },
    { name: 'D&D Manager',    path: PATHS.DND_MANAGER,      visible: NavVisibility.LoggedIn,  children: [
      { name: 'Setting',        path: PATHS.SETTING,                visible: NavVisibility.LoggedIn, children: [] },
      { name: 'Classes',        path: PATHS.CLASSES,                visible: NavVisibility.LoggedIn, children: [] },
      { name: 'Races',          path: PATHS.RACES,                  visible: NavVisibility.LoggedIn, children: [] },
      { name: 'Specials',       path: PATHS.ADD_SPECIAL_ABILITIES,  visible: NavVisibility.LoggedIn, children: [] }
    ] }
  ];
  footer = [];
}