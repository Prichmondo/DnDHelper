//ANGULAR
import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';
import { RouterModule, Router }     from '@angular/router';

<<<<<<< HEAD
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { DiceRollerComponent } from './components/app.diceroller';
import { Utilities } from './utilities/app.utilities';
import { CharacterSheetComponent } from './components/app.characterSheet';
import { InputNumberComponent } from './components/inputs/input-number';
import { DiceInputComponent } from './components/inputs/dice-input';
import { RollFilterPipe } from './utilities/roll-filter-pipe';
=======
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
>>>>>>> e29677fbec58be60fedcd8547789ada5a92d4427

@NgModule({
  declarations: [
    AppComponent,
    DiceRollerComponent,
    CharacterSheetComponent,
<<<<<<< HEAD
    InputNumberComponent,
    DiceInputComponent,
    RollFilterPipe
=======
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    CampainsComponent,
    HomeComponent
>>>>>>> e29677fbec58be60fedcd8547789ada5a92d4427
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