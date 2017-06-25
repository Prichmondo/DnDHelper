import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiceRollerComponent }      from './components/app.diceroller';
import { CharacterSheetComponent }  from './components/app.characterSheet';
import { LoginComponent }           from './components/login/app.login';
import { CampainsComponent }        from './components/campains/app.campains';
import { HomeComponent }            from './components/home/app.home';

const routes: Routes = [
    //ROUTES
    {   data: { name: "Home" },             path: '',                   component: HomeComponent  },
    {   data: { name: "Dice Roller" },      path: 'dice-roller',        component: DiceRollerComponent  },
    {   data: { name: "Character Sheet" },  path: 'character-sheet',    component: CharacterSheetComponent  },    
    {   data: { name: "Campains" },         path: 'campains',           component: CampainsComponent  },
    {   data: { name: "Login" },            path: 'login',              component: LoginComponent  }
    //CampainsComponent

    //REDIRECTION
    //{   path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
  static routes: Routes = routes;
}