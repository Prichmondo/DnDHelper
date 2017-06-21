import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiceRollerComponent } from './components/app.diceroller';
import { CharacterSheetComponent } from './components/app.characterSheet';

const routes: Routes = [
    //ROUTES
    {   path: 'dice-roller',        component: DiceRollerComponent  },
    {   path: 'character-sheet',    component: CharacterSheetComponent  }

    //REDIRECTION
    //{   path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}