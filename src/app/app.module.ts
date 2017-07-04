import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { DiceRollerComponent } from './components/app.diceroller';
import { Utilities } from './utilities/app.utilities';
import { CharacterSheetComponent } from './components/app.characterSheet';
import { InputNumberComponent } from './components/inputs/input-number';
import { DiceInputComponent } from './components/inputs/dice-input';
import { RollFilterPipe } from './utilities/roll-filter-pipe';

@NgModule({
  declarations: [
    AppComponent,
    DiceRollerComponent,
    CharacterSheetComponent,
    InputNumberComponent,
    DiceInputComponent,
    RollFilterPipe
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
