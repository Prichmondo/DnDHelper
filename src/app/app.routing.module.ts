import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { AppRoute, NavMenu, 
  NavVisibility }                   from './models/AppRoute';

import { DiceRollerComponent }      from './components/app.diceroller';
import { CharacterSheetComponent }  from './components/app.characterSheet';
import { LoginComponent }           from './components/login/app.login';
import { RegisterComponent }        from './components/register/app.register';
import { CampainsComponent }        from './components/campains/app.campains';
import { HomeComponent }            from './components/home/app.home';
<<<<<<< HEAD
import { ShowCharacters }           from './components/app.showCharacters';
=======
import { AuthGuard, Anonymus }      from './services/authGard.service';
>>>>>>> e29677fbec58be60fedcd8547789ada5a92d4427

const routes: AppRoute[] = [
    //ROUTES
<<<<<<< HEAD
    {   data: { name: "Home" },             path: '',                   component: HomeComponent  },
    {   data: { name: "Dice Roller" },      path: 'dice-roller',        component: DiceRollerComponent  },
    {   data: { name: "Character Sheet" },  path: 'character-sheet',    component: CharacterSheetComponent  },    
    {   data: { name: "Campains" },         path: 'campains',           component: CampainsComponent  },
    {   data: { name: "Login" },            path: 'login',              component: LoginComponent  },
    {   data: { name: "Party Editor"},      path: 'party-editor',       component: ShowCharacters }
=======
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
      path          : 'character-sheet',    
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
    }
>>>>>>> e29677fbec58be60fedcd8547789ada5a92d4427
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