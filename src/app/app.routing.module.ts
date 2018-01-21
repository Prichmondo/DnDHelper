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
import { InitMgrComponent }         from './components/initiative-manager/init-mgr/init-mgr.component';
import { PATHS }                    from './app.paths';

const routes: AppRoute[] = [
    //ROUTESs
    { nav: { 
        name        : "Home",        
        position    : NavMenu.Main, 
        visible     : NavVisibility.Always       
      },  
      path          : PATHS.HOME, 
      component     : HomeComponent 
    },

    { nav: { 
        name        : "Dice Roller",     
        position    : NavMenu.Main, 
        visible     : NavVisibility.Always       
      },  
      path          : PATHS.DICE_ROLLER,        
      component     : DiceRollerComponent      
    },

    { nav: { 
        name        : "Character Sheet", 
        position    : NavMenu.Main, 
        visible     : NavVisibility.LoggedIn   
      },  
      path          : `${PATHS.CHARACTER_SHEET}/:id`,    
      component     : CharacterSheetComponent  
    },

    { nav: { 
      name        : "Initiative Manager", 
      position    : NavMenu.Main, 
      visible     : NavVisibility.Always   
    },  
    path          : PATHS.INIT_MANAGER,    
    component     : InitMgrComponent  
    },

    { nav: { 
        name        : "Campaigns",        
        position    : NavMenu.Main, 
        visible     : NavVisibility.LoggedIn   
      },  
      path          : PATHS.CAMPAIGNS,           
      component     : CampaignsComponent,       
      canActivate   : [AuthGuard] 
    },

    { 
      nav           : null,  
      path          : `${PATHS.CAMPAIGN}/:id`,           
      component     : CampaignComponent,       
      canActivate   : [AuthGuard] 
    },
    
    { 
      nav           : null,  
      path          : PATHS.ADD_CAMPAIGN,           
      component     : AddCampaignComponent,       
      canActivate   : [AuthGuard] 
    },

    { nav: { 
        name        : "Party Editor",        
        position    : NavMenu.Main, 
        visible     : NavVisibility.LoggedIn       
      },  
      path          : PATHS.PARTY_EDITOR, 
      component     : ShowCharacters,
      canActivate   : [AuthGuard] 
    },

    { nav: { 
        name        : "Classes",        
        position    : NavMenu.Main, 
        visible     : NavVisibility.LoggedIn       
      },  
      path          : PATHS.CLASSES, 
      component     : ClassesList
    },

    { nav: { 
        name        : "Character Class",
        visible     : NavVisibility.LoggedIn
      },  
      path          : PATHS.CHARACTER_CLASS,
      component     : ClassForm
    },

    { nav: { 
        name        : "Character Class",
        visible     : NavVisibility.LoggedIn
      },  
      path          : `${PATHS.CHARACTER_CLASS}/:id`,
      component     : ClassForm
    },

    { nav: { 
        name        : "Login",           
        position    : NavMenu.User, 
        visible     : NavVisibility.LoggedOut  
      },  
      path          : PATHS.LOGIN,
      component     : LoginComponent,
      canActivate   : [Anonymus] 
    },

    { nav: { 
        name        : "Register",
        position    : NavMenu.User,
        visible     : NavVisibility.LoggedOut
      },  
      path          : PATHS.REGISTER,
      component     : RegisterComponent,
      canActivate   : [Anonymus] 
    },

    { nav: { 
        name        : "Races List",
        position    : NavMenu.Main,
        visible     : NavVisibility.LoggedIn
      },  
      path          : PATHS.RACES,
      component     : RacesList 
    },

    { nav: { 
      },  
      path          : PATHS.RACE_FORM,
      component     : RaceForm 
    },

    { nav: { 
      },  
      path          : `${PATHS.RACE_FORM}/:id`,
      component     : RaceForm 
    },

    { nav: { 
      name          : "Special Abilities",
      position      : NavMenu.Main,
      visible       : NavVisibility.LoggedIn
    },  
      path          : PATHS.ADD_SPECIAL_ABILITIES,
      component     : SpecialAbilitiesComponent 
    },

    { nav: { 
    },  
    path            : PATHS.APP_SPECIAL_ABILITIES_FORM,
    component       : SpecialAbilityForm 
    },

    { nav: { 
      },  
      path          : `${PATHS.APP_SPECIAL_ABILITIES_FORM}/:id`,
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