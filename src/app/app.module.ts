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
import { CampainsComponent }        from './components/campains/app.campains';
import { HomeComponent }            from './components/home/app.home';

//SERVICES
import { Utilities }                from './utilities/app.utilities';
import { AuthenticationService }    from './services/authentication.service';
import { LocalStoreService }        from './services/localStore.service';
import { LocalStoreManagerService } from './services/localStoreManager.service';
import { AppRequestOptions }        from './helpers/app.requestOptions' 
import { HttpService }              from './services/http.service';
import { CampainsService }          from './services/campains.service';

@NgModule({
  declarations: [
    AppComponent,
    DiceRollerComponent,
    CharacterSheetComponent,
    HeaderComponent,
    LoginComponent,
    CampainsComponent,
    HomeComponent
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
    CampainsService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }