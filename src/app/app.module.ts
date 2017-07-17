//ANGULAR
import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';
import { RouterModule, Router }     from '@angular/router';

//COMPONENTS
import { AppRoutingModule }         from './app.routing.module';
import { AppComponent }             from './app.component';
import { DiceRollerComponent }      from './components/dice-roller/app.diceroller';
import { CharacterSheetComponent }  from './components/app.characterSheet';
import { HeaderComponent }          from './header.component';
import { LoginComponent }           from './components/login/app.login';
import { RegisterComponent }        from './components/register/app.register';
import { CampainsComponent }        from './components/campains/app.campains';
import { HomeComponent }            from './components/home/app.home';
import { ShowCharacters }           from './components/app.showCharacters';
import { ShowClasses }              from './components/app.showClasses';
import { InputNumberComponent }     from './components/inputs/input-number';
import { DiceInputComponent }       from './components/inputs/dice-input';
import { RollFilterByDice,
         TotalFilterByDice }        from './components/dice-roller/app.diceroller.pipes';
import { RacesList }                from './components/races-list/app.races-list';
import { FormatRaceSize,
         FormatRaceAbilities }      from './components/races-list/app.race-list.pipes'
import { ClassForm }                from './components/app.classForm';


//SERVICES
import { Utilities }                from './utilities/app.utilities';
import { AuthenticationService }    from './services/authentication.service';
import { UsersService }             from './services/users.service';
import { LocalStoreService }        from './services/localStore.service';
import { LocalStoreManagerService } from './services/localStoreManager.service';
import { AppRequestOptions }        from './helpers/app.requestOptions' 
import { HttpService }              from './services/http.service';
import { CampainsService }          from './services/campains.service';
import { AuthGuard, Anonymus }      from './services/authGard.service';
import { Broadcaster }              from './services/broadcast';
import { CharactersService }        from './services/characthers.service';
import { CharacterClassService }    from './services/characterClasses.service';


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
    CampainsComponent,
    HomeComponent,
    ShowCharacters,
    ShowClasses,
    ClassForm,
    RacesList,
    FormatRaceSize,
    FormatRaceAbilities
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    Utilities, 
    AuthenticationService,
    LocalStoreService,
    LocalStoreManagerService,
    AppRequestOptions,
    HttpService,
    CampainsService,
    CharactersService,
    CharacterClassService,
    AuthGuard, Anonymus,
    Broadcaster, UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }