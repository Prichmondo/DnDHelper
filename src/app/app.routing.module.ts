import { NgModule }                 from '@angular/core';
import { RouterModule, Route, Routes }     from '@angular/router';
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

const routes: Route[] = [
    //ROUTESs
    { path: PATHS.HOME,                                 component: HomeComponent },
    { path: PATHS.DICE_ROLLER,                          component: DiceRollerComponent },
    { path: `${PATHS.CHARACTER_SHEET}/:id`,             component: CharacterSheetComponent },
    { path: PATHS.INIT_MANAGER,                         component: InitMgrComponent },
    { path: PATHS.CAMPAIGNS,                            component: CampaignsComponent,        canActivate   : [AuthGuard] },
    { path: `${PATHS.CAMPAIGN}/:id`,                    component: CampaignComponent,         canActivate   : [AuthGuard] },    
    { path: PATHS.ADD_CAMPAIGN,                         component: AddCampaignComponent,      canActivate   : [AuthGuard] },
    { path: PATHS.PARTY_EDITOR,                         component: ShowCharacters,            canActivate   : [AuthGuard] },
    { path: PATHS.CLASSES,                              component: ClassesList },
    { path: PATHS.CHARACTER_CLASS,                      component: ClassForm },
    { path: `${PATHS.CHARACTER_CLASS}/:id`,             component: ClassForm },
    { path: PATHS.LOGIN,                                component: LoginComponent,            canActivate   : [Anonymus] },
    { path: PATHS.REGISTER,                             component: RegisterComponent,         canActivate   : [Anonymus] },
    { path: PATHS.RACES,                                component: RacesList },
    { path: PATHS.RACE_FORM,                            component: RaceForm },
    { path: `${PATHS.RACE_FORM}/:id`,                   component: RaceForm },
    { path: PATHS.ADD_SPECIAL_ABILITIES,                component: SpecialAbilitiesComponent },
    { path: PATHS.APP_SPECIAL_ABILITIES_FORM,           component: SpecialAbilityForm },
    { path: `${PATHS.APP_SPECIAL_ABILITIES_FORM}/:id`,  component: SpecialAbilityForm },  

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