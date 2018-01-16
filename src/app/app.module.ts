//ANGULAR
import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';
import { RouterModule, Router }     from '@angular/router';
import { from }                     from 'rxjs/observable/from';

//COMPONENTS
import { AppRoutingModule }         from './app.routing.module';
import { AppComponent }             from './app.component';
import { DiceRollerComponent }      from './components/dice-roller/app.diceroller';
import { CharacterSheetComponent }  from './components/app.characterSheet';
import { HeaderComponent }          from './header.component';
import { LoginComponent }           from './components/login/app.login';
import { RegisterComponent }        from './components/register/app.register';
import { CampaignsComponent }       from './components/campaigns/app.campaigns';
import { CampaignComponent }        from './components/campaigns/app.campaign';
import { AddCampaignComponent }     from './components/campaigns/app.addCampaign';
import { HomeComponent }            from './components/home/app.home';
import { ShowCharacters }           from './components/app.showCharacters';
import { ClassesList }              from './components/character-classes/app.classes.list';
import { ClassForm }                from './components/character-classes/app.class.form';
import { ClassTablePreview }        from './components/character-classes/app.class.table-preview';
import { InputNumberComponent }     from './components/inputs/input-number';
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
import { CharactersService }        from './services/characthers.service';
import { CharacterClassService }    from './services/characterClasses.service';
import { RacesService }             from './services/races.service';
import { SpecialAbilitiesService }  from './services/special.abilities.service';
import { PgSkillsService }          from './services/pgSkills.service';
import { DiceRoller }               from './components/dice-roller/diceroller.engine';
import { ModalComponent }           from './components/modal/modal.component';
import { ModalService }             from './services/modal.service'

@NgModule({
  declarations: [
    AppComponent,
    DiceRollerComponent,
    CharacterSheetComponent,
    InputNumberComponent,
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
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    Utilities,
    DnDUtilities,
    DiceRoller, 
    RulebookService,
    AuthenticationService,
    LocalStoreService,
    LocalStoreManagerService,
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
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }