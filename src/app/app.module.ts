import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { DiceRollerComponent } from './components/app.diceroller';
import { Utilities } from './utilities/app.utilities';

@NgModule({
  declarations: [
    AppComponent,
    DiceRollerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [Utilities],
  bootstrap: [AppComponent]
})
export class AppModule { }
