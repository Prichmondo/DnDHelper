//ANGULAR

import { BrowserModule }                    from '@angular/platform-browser';
import { NgModule }                         from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }                       from '@angular/http';
import { RouterModule, Router }             from '@angular/router';
import { from }                             from 'rxjs/observable/from';
//import { InfiniteScrollModule }             from 'ngx-infinite-scroll';

//COMPONENTS
import { AppRoutingModule }         from './app.routing.module';
import { AppComponent }             from './app.component';
import { DiceRollerComponent }      from './components/dice-roller/app.diceroller';
import { CharacterSheetComponent }  from './components/character-sheet/character-sheet.component';
import { CharacterAbilitiesComponent } from './components/character-sheet/character-abilities/character-abilities.component';
import { HeaderComponent }          from './header.component';
import { LoginComponent }           from './components/login/app.login';
import { RegisterComponent }        from './components/register/app.register';
import { CampaignsComponent }       from './components/campaigns/app.campaigns';
import { CampaignComponent }        from './components/campaigns/app.campaign';
import { AddCampaignComponent }     from './components/campaigns/app.addCampaign';
import { HomeComponent }            from './components/home/app.home';
import { ShowCharacters }           from './components/app.showCharacters';
import { CharactersList }           from './components/character-sheet/app.characters-list';
import { ClassesList }              from './components/character-classes/app.classes.list';
import { ClassForm }                from './components/character-classes/app.class.form';
import { ClassTablePreview }        from './components/character-classes/app.class.table-preview';
import { InputNumberComponent }     from './components/inputs/input-number';
import { InputNumberSmallComponent }from './components/inputs/input-number-small';
import { DiceInputComponent }       from './components/inputs/dice-input';
import { RollFilterByDice,
         TotalFilterByDice }        from './components/dice-roller/app.diceroller.pipes';
import { RacesList }                from './components/races-list/app.races-list';
import { RaceForm }                 from './components/races-list/app.race.form';
import { SpecialAbilitiesComponent }from './components/special-abilities/app.special-abilities';
import { SpecialAbilityForm }       from './components/special-abilities/app.specials.form';
import { ToggleButtonComponent }    from './components/inputs/toggle-button';
import { ToggleButtonComponentB }   from './components/inputs/toggle-button-boolean';
import { TableDisplayData }         from './components/table-data/table-display-data';
import { Pipe3FiltersText }         from './utilities/pipe.3filters.text';
import { InitMgrComponent }         from './components/initiative-manager/init-mgr/init-mgr.component';
import { CockpitComponent }         from './components/initiative-manager/init-mgr/cockpit/cockpit.component';
import { CharInfoFormComponent }    from './components/initiative-manager/init-mgr/char-info-form/char-info-form.component';
import { TurnplayerComponent }      from './components/initiative-manager/init-mgr/turn-player/turnplayer/turnplayer.component';
import { CustomMinDirective,
         CustomMaxDirective }       from './utilities/app.custom-form-validators';

//SERVICES
import { Utilities }                from './utilities/app.utilities';
import { DnDUtilities }             from './utilities/app.utilities.dnd';
import { RulebookService }          from './services/rulebook.service';
import { AuthenticationService }    from './services/authentication.service';
import { UsersService }             from './services/users.service';
import { LocalStoreService }        from './services/localStore.service';
import { LocalStoreManagerService } from './services/localStoreManager.service';
import { AppRequestOptions }        from './helpers/app.requestOptions' 
import { HttpService }              from './services/http.service';
import { CampaignsService }         from './services/campaigns.service';
import { AuthGuard, Anonymus }      from './services/authGard.service';
import { Broadcaster }              from './services/broadcast';
import { CharactersService }        from './services/characters.service';
import { CharacterClassService }    from './services/characterClasses.service';
import { RacesService }             from './services/races.service';
import { SpecialAbilitiesService }  from './services/special.abilities.service';
import { PgSkillsService }          from './services/pgSkills.service';
import { DiceRoller }               from './components/dice-roller/diceroller.engine';
import { ModalComponent }           from './components/modal/modal.component';
import { ModalService }             from './services/modal.service';
import { LocalStorageManagerService } from './services/local-storage-manager.service';
import { AppNav }                   from './services/app.nav.service';
import { CharInfoTableComponent } from './components/initiative-manager/init-mgr/char-info-table/char-info-table.component';
import { CharacterDetailsComponent } from './components/character-sheet/character-details/character-details.component' 

@NgModule({
  declarations: [
    AppComponent,
    DiceRollerComponent,
    CharacterSheetComponent,
    InputNumberComponent,
    InputNumberSmallComponent,
    DiceInputComponent,
    RollFilterByDice,
    TotalFilterByDice,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    CampaignsComponent,
    CampaignComponent,
    AddCampaignComponent,
    HomeComponent,
    ShowCharacters,
    CharactersList,
    ClassesList,
    ClassForm,
    ClassTablePreview,
    RacesList,
    RaceForm,
    SpecialAbilitiesComponent,
    SpecialAbilityForm,
    ToggleButtonComponent,
    ToggleButtonComponentB,
    TableDisplayData,
    Pipe3FiltersText,
    ModalComponent,
    InitMgrComponent,
    CockpitComponent,
    CharInfoFormComponent,
    TurnplayerComponent,
    CharInfoTableComponent,
    CharacterDetailsComponent,
    CharacterAbilitiesComponent,
    CustomMinDirective,
    CustomMaxDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    //InfiniteScrollModule
  ],
  providers: [
    Utilities,
    DnDUtilities,
    DiceRoller, 
    RulebookService,
    AuthenticationService,
    LocalStoreService,
    LocalStoreManagerService,
    LocalStorageManagerService,
    AppRequestOptions,
    HttpService,
    CampaignsService,
    CharactersService,
    CharacterClassService,
    RacesService,
    SpecialAbilitiesService,
    PgSkillsService,
    Pipe3FiltersText,
    AuthGuard, Anonymus,
    Broadcaster, UsersService, 
    ModalService, AppNav
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }