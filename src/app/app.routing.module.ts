import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiceRollerComponent } from './components/app.diceroller';

const routes: Routes = [
    //ROUTES
    {   path: '',               component: HomeComponent  },
    {   path: 'dice-roller',    component: DiceRollerComponent  },
    //{   path: 'campains',       component: CampainsComponent  },
    //{   path: 'equip',          component: EquipilComponent  },

    //REDIRECTION
    //{   path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}