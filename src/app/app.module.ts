import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { DiceRollerComponent } from './components/app.diceroller';
<<<<<<< HEAD
import { Utilities } from './utilities/app.utilities';
=======
import { CharacterSheetComponent } from './components/app.characterSheet';
>>>>>>> 8d11855b8b1e05b11630cd1919abdae7045dcc0e

@NgModule({
  declarations: [
    AppComponent,
    DiceRollerComponent,
    CharacterSheetComponent
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
