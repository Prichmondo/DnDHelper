//ANGULAR
import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';
import { RouterModule, Router }     from '@angular/router';

//COMPONENTS
import { AppRoutingModule }         from './app.routing.module';
import { AppComponent }             from './app.component';
import { DiceRollerComponent }      from './components/app.diceroller';
import { CharacterSheetComponent }  from './components/app.characterSheet';
import { HeaderComponent }          from './header.component';
import { LoginComponent }           from './components/login/app.login';
import { RegisterComponent }        from './components/register/app.register';
import { CampainsComponent }        from './components/campains/app.campains';
import { HomeComponent }            from './components/home/app.home';
<<<<<<< HEAD
import { ShowCharacters }           from './components/app.showCharacters';
=======
import { InputNumberComponent }     from './components/inputs/input-number';
import { DiceInputComponent }       from './components/inputs/dice-input';
import { RollFilterPipe }           from './utilities/roll-filter-pipe';
>>>>>>> 8a64d228309c7651edf43171b339abaa61724226

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

@NgModule({
  declarations: [
    AppComponent,
    DiceRollerComponent,
    CharacterSheetComponent,
    InputNumberComponent,
    DiceInputComponent,
    RollFilterPipe,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    CampainsComponent,
    HomeComponent,
    ShowCharacters,
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
    AuthGuard, Anonymus,
    Broadcaster, UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }