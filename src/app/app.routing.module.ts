import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiceRollerComponent } from './components/app.diceroller';
import { CharacterSheetComponent } from './components/app.characterSheet';

const routes: Routes = [
    //ROUTES
    {   data: { name: "Home" },             path: '',                   component: CharacterSheetComponent  },
    {   data: { name: "Dice Roller" },      path: 'dice-roller',        component: DiceRollerComponent  },
    {   data: { name: "Character Sheet" },  path: 'character-sheet',    component: CharacterSheetComponent  }    

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