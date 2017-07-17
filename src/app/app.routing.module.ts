import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { AppRoute, NavMenu, 
  NavVisibility }                   from './models/AppRoute';

import { DiceRollerComponent }      from './components/dice-roller/app.diceroller';
import { CharacterSheetComponent }  from './components/app.characterSheet';
import { LoginComponent }           from './components/login/app.login';
import { RegisterComponent }        from './components/register/app.register';
import { CampainsComponent }        from './components/campains/app.campains';
import { HomeComponent }            from './components/home/app.home';
import { AuthGuard, Anonymus }      from './services/authGard.service';
import { ShowCharacters }           from './components/app.showCharacters';
import { ShowClasses }              from './components/app.showClasses';
import { ClassForm }                from './components/app.classForm';
import { RacesList }                from './components/races-list/app.races-list';

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
        name        : "Campains",        
        position    : NavMenu.Main, 
        visible     : NavVisibility.LoggedIn   
      },  
      path          : 'campains',           
      component     : CampainsComponent,       
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
      component     : ShowClasses
    },

    { nav: { 
        name        : "Character Class",
        visible     : NavVisibility.LoggedIn
      },  
      path          : 'character-class',
      component     : ClassForm,
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
    }
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