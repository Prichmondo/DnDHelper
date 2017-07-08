import { Component,
         Input,
         OnInit,
         EventEmitter }             from '@angular/core';

import { Dice }                     from '../../models/dice';
import { Roll, Totals }             from '../../models/roll';
import { DICES }                    from '../../mocks/mock-dices';
import { Utilities }                from '../../utilities/app.utilities';
import { InputNumberComponent }     from '../inputs/input-number';
import { DiceInputComponent }       from '../inputs/dice-input';
import { RollFilterByDice,
         TotalFilterByDice }         from './app.diceroller.pipes';


@Component({
  selector: 'app-dice-roller',
  templateUrl: './app.diceroller.html',
  styleUrls: ['./app.diceroller.css'],
})

export class DiceRollerComponent {
  title = 'Dice Roller';
  dicesSet: Dice[] = DICES;
  rolls: Roll[] = [];
  totals: Totals[] = [];
  totalRollOnTable: number = 0;

  //component options
  addRollsMode: boolean = false;
  

  constructor(
    private utils: Utilities,
  ){}

  onDiceRoll(newRoll: Roll[]){
    console.log("notify!");
    if (!newRoll){return this.rolls}

    if (this.addRollsMode === false) {
      console.log("enter remove dice form roll with dice:");
      console.log(newRoll[0].dice);
      this.removeDicesFromRolls(newRoll[0].dice)}

    for (var i = 0; i < newRoll.length; i++){
      if (newRoll[i].roll === 0) {
        newRoll[i].roll = this.utils.getRandomInteger(1,newRoll[i].dice.faces);
      }
      this.rolls.push(newRoll[i]);
    }
    this.calculateTotals();
    console.log(this.rolls);
  }

  onDiceReset(dice: Dice){
    console.log("on dice reset!");
    this.removeDicesFromRolls(dice);
    this.calculateTotals();
  }

  private removeDicesFromRolls(dice: Dice): void{
    console.log("entered remove dice");
    console.log(dice);
    if (!dice || this.rolls.length < 1) {
      console.log("exiting remove");
      return
    }

    for (var i = (this.rolls.length - 1); i > -1; i--){
      console.log(i);
      if (this.rolls[i].dice == dice){
        this.rolls.splice(i, 1);
        console.log("spliced");
      }
    }
  }

  private calculateTotals(){
    this.totals = [];
    this.totalRollOnTable = 0;
    if (this.rolls.length > 0) {
      var iDices = 0;
      var iRolls = 0;
      for (iDices = 0; iDices < this.dicesSet.length; iDices++){
        this.totals.push({
          dice: this.dicesSet[iDices],
          totalRoll: 0,
          totalModifier: 0,
          total: 0
        })
        for (iRolls = 0; iRolls < this.rolls.length; iRolls++){
          if (this.rolls[iRolls].dice == this.totals[iDices].dice){
            this.totals[iDices].totalRoll += this.rolls[iRolls].roll;
            this.totals[iDices].totalModifier += this.rolls[iRolls].modifier;
            this.totals[iDices].total += (this.rolls[iRolls].roll + this.rolls[iRolls].modifier);
            this.totalRollOnTable += (this.rolls[iRolls].roll + this.rolls[iRolls].modifier);
          }
        }
      }
    }
    return this.totalRollOnTable;
  }

}