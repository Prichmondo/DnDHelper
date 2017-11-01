import { Component,
         Input,
         OnInit,
         EventEmitter,
         ViewChildren,
         AfterViewInit,
         QueryList }                from '@angular/core';

import { Dice }                    from '../../models/dice';
import { Roll,
         Totals,
         RollRequest }              from '../../models/roll';
import { DICES }                    from '../../mocks/mock-dices';
import { Utilities }                from '../../utilities/app.utilities';
import { InputNumberComponent }     from '../inputs/input-number';
import { DiceInputComponent }       from '../inputs/dice-input';
import { RollFilterByDice,
         TotalFilterByDice }        from './app.diceroller.pipes';


export class DiceGui extends Dice {
  
  markOver?: number;
}
        

@Component({
  selector: 'app-dice-roller',
  templateUrl: './app.diceroller.html',
  styleUrls: ['./app.diceroller.css'],
})

export class DiceRollerComponent implements AfterViewInit{
  title = 'Dice Roller';
  dicesSet: DiceGui[] = DICES;
  rolls: Roll[] = [];
  totals: Totals[] = [];
  totalRollOnTable: number = 0;

  //component options
  addRollsMode: boolean = false;
  
  @ViewChildren(DiceInputComponent) diceComponents:DiceInputComponent[];

  ngAfterViewInit(){
    
  }

  constructor(
    private utils: Utilities,
  ){}

  roll(){
    return "ciao";
  }

  /*roll(DicesToRoll: RollRequest[]): {total: number, details: Roll[]}{
    if (DicesToRoll.length = 0){return {total: 0, details: []}};


  }*/

  rollCmd(cmdLine: string){
    //phase 1: analyze command line
    if (!cmdLine || cmdLine.length < 1){
      console.log("Invalid or missing command line" + cmdLine);
      return null;
    }
    var i = 0;
    var cmdLineParameters: string[] = [];

    for (i = 0; i < cmdLine.length; i++){
      
    }

  }

  rollAll(){
    this.diceComponents.forEach(diceComponent => diceComponent.roll());
  }

  resetAll(showAlert: boolean = true){
    if (!showAlert || this.utils.confirmBox("Are you sure to reset all dices and results?")){
      this.diceComponents.forEach(diceComponent => diceComponent.reset());
    }
    this.resetMarkOver();
  }

  onDiceRoll(newRoll: Roll[]){
    if (!newRoll){return this.rolls}

    if (this.addRollsMode === false) {
      this.removeDicesFromRolls(newRoll[0].dice)
    }

    for (var i = 0; i < newRoll.length; i++){
      if (newRoll[i].roll === 0) {
        newRoll[i].roll = this.utils.getRandomInteger(1,newRoll[i].dice.faces);
      }
      this.rolls.push(newRoll[i]);
    }
    this.calculateTotals();
  }

  resetMarkOver(){
    for (var i = 0; i < this.dicesSet.length; i++){
      this.dicesSet[i].markOver = this.dicesSet[i].faces;
    }
  }

  onDiceReset(dice: DiceGui){
    this.removeDicesFromRolls(dice);
    this.calculateTotals();
  }

  private removeDicesFromRolls(dice: DiceGui): void{
    if (!dice || this.rolls.length < 1) {
      return
    }
    for (var i = (this.rolls.length - 1); i > -1; i--){
      if (this.rolls[i].dice.faces === dice.faces){
        this.rolls.splice(i, 1);
      }
    }
  }

  private calculateTotals(){
    this.totals = [];
    this.totalRollOnTable = 0;
    if (this.rolls.length > 0) {
      var iDices = 0;
      var iRolls = 0;
      var diceCounter = 0;
      for (iDices = 0; iDices < this.dicesSet.length; iDices++){
        this.totals.push({
          dice: this.dicesSet[iDices],
          totalRoll: 0,
          totalModifier: 0,
          total: 0,
          luck: 0
        })
        for (iRolls = 0, diceCounter = 0; iRolls < this.rolls.length; iRolls++){
          if (this.rolls[iRolls].dice.name == this.totals[iDices].dice.name){
            diceCounter += 1;
            this.totals[iDices].totalRoll += this.rolls[iRolls].roll;
            this.totals[iDices].totalModifier += this.rolls[iRolls].modifier;
            this.totals[iDices].total += (this.rolls[iRolls].roll + this.rolls[iRolls].modifier);
            this.totals[iDices].luck = Math.round((this.totals[iDices].totalRoll - diceCounter) / ((this.totals[iDices].dice.faces -1) * diceCounter) * 100);
            this.totalRollOnTable += (this.rolls[iRolls].roll + this.rolls[iRolls].modifier);
          }
        }
      }
    }
    return this.totalRollOnTable;
  }

  calculateSuccessfulRolls(dice: DiceGui): number{
    if (!dice || !this.rolls){return 0};
    
    var count: number = 0;
    for (var i = 0; i < this.rolls.length; i++){
      if (this.rolls[i].dice.name === dice.name){
        if (this.rolls[i].roll > dice.markOver){
          count ++;
        }
      }
    }
    return count;
  }

  ngOnInit(){
    this.resetMarkOver()
  }

}