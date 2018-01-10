import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { AppRoute, NavMenu, 
  NavVisibility }                   from './models/AppRoute';

import { DiceRollerComponent }      from './components/dice-roller/app.diceroller';
import { CharacterSheetComponent }  from './components/app.characterSheet';
import { LoginComponent }           from './components/login/app.login';
import { RegisterComponent }        from './components/register/app.register';
import { CampaignsComponent }       from './components/campaigns/app.campaigns';
import { CampaignComponent }        from './components/campaigns/app.campaign';
import { AddCampaignComponent }     from './components/campaigns/app.addCampaign';
import { HomeComponent }            from './components/home/app.home';
import { AuthGuard, Anonymus }      from './services/authGard.service';
import { ShowCharacters }           from './components/app.showCharacters';
import { ClassesList }              from './components/character-classes/app.classes.list';
import { ClassForm }                from './components/character-classes/app.class.form';
import { RacesList }                from './components/races-list/app.races-list';
import { RaceForm }                 from './components/races-list/app.race.form';
import { SpecialAbilitiesComponent }from './components/special-abilities/app.special-abilities';
import { SpecialAbilityForm }       from './components/special-abilities/app.specials.form';

const routes: AppRoute[] = [
    //ROUTESs
    { nav: { 
        name        : "Home",        
        position    : NavMenu.Main, 
        visible     : NavVisibility.Always       
      },  
      path          : '', 
      component     : HomeComponent 
    },

    { nav: { 
        name        : "Dice Roller",     
        position    : NavMenu.Main, 
        visible     : NavVisibility.Always       
      },  
      path          : 'dice-roller',        
      component     : DiceRollerComponent      
    },

    { nav: { 
        name        : "Character Sheet", 
        position    : NavMenu.Main, 
        visible     : NavVisibility.LoggedIn   
      },  
      path          : 'character-sheet/:id',    
      component     : CharacterSheetComponent  
    },

    { nav: { 
        name        : "Campaigns",        
        position    : NavMenu.Main, 
        visible     : NavVisibility.LoggedIn   
      },  
      path          : 'campaigns',           
      component     : CampaignsComponent,       
      canActivate   : [AuthGuard] 
    },

    { 
      nav           : null,  
      path          : 'campaign/:id',           
      component     : CampaignComponent,       
      canActivate   : [AuthGuard] 
    },
    
    { 
      nav           : null,  
      path          : 'add-campaign',           
      component     : AddCampaignComponent,       
      canActivate   : [AuthGuard] 
    },

    { nav: { 
        name        : "Party Editor",        
        position    : NavMenu.Main, 
        visible     : NavVisibility.LoggedIn       
      },  
      path          : 'party-editor', 
      component     : ShowCharacters,
      canActivate   : [AuthGuard] 
    },

    { nav: { 
        name        : "Classes",        
        position    : NavMenu.Main, 
        visible     : NavVisibility.LoggedIn       
      },  
      path          : 'Classes', 
      component     : ClassesList
    },

    { nav: { 
        name        : "Character Class",
        visible     : NavVisibility.LoggedIn
      },  
      path          : 'character-class',
      component     : ClassForm
    },

    { nav: { 
        name        : "Character Class",
        visible     : NavVisibility.LoggedIn
      },  
      path          : 'character-class/:id',
      component     : ClassForm
    },

    { nav: { 
        name        : "Login",           
        position    : NavMenu.User, 
        visible     : NavVisibility.LoggedOut  
      },  
      path          : 'login',
      component     : LoginComponent,
      canActivate   : [Anonymus] 
    },

    { nav: { 
        name        : "Register",
        position    : NavMenu.User,
        visible     : NavVisibility.LoggedOut
      },  
      path          : 'register',
      component     : RegisterComponent,
      canActivate   : [Anonymus] 
    },

    { nav: { 
        name        : "Races List",
        position    : NavMenu.Main,
        visible     : NavVisibility.LoggedIn
      },  
      path          : 'races-list',
      component     : RacesList 
    },

    { nav: { 
      },  
      path          : 'race-form',
      component     : RaceForm 
    },

    { nav: { 
      },  
      path          : 'race-form/:id',
      component     : RaceForm 
    },

    { nav: { 
      name          : "Special Abilities",
      position      : NavMenu.Main,
      visible       : NavVisibility.LoggedIn
    },  
      path          : 'app-special-abilities',
      component     : SpecialAbilitiesComponent 
    },

    { nav: { 
    },  
    path            : 'app-special-abilities-form',
    component       : SpecialAbilityForm 
    },

    { nav: { 
      },  
      path          : 'app-special-abilities-form/:id',
      component     : SpecialAbilityForm 
    },
  
    //CampaignsComponent

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