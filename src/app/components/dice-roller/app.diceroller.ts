import { Component,
         Input,
         OnInit,
         EventEmitter,
         ViewChildren,
         AfterViewInit,
         QueryList }                from '@angular/core';

import { Dice,
         Roll,
         RollTotal,
         RollRequest }              from '../../models/dice';
import { DICES }                    from '../../mocks/mock-dices';
import { Utilities }                from '../../utilities/app.utilities';
import { InputNumberComponent }     from '../inputs/input-number';
import { DiceInputComponent }       from '../inputs/dice-input';
import { ToggleButtonComponentB }   from '../inputs/toggle-button-boolean';
import { RollFilterByDice,
         TotalFilterByDice }        from './app.diceroller.pipes';
import { DiceRoller }               from './diceroller.engine';


export class DiceGui extends Dice {
  
  markOver?: number;
  isDiceVisible?: boolean;
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
  totals: RollTotal[] = [];
  totalRollOnTable: number = 0;
  
  settingPaneIsVisibe:boolean = false;

  //component options
  @Input() addRollsMode: boolean = false;
  @Input() addModifierToEveryRoll: boolean = false;
  @Input() showOptionButton: boolean = true;
  @Input() showLuckRate: boolean = true;
  @Input() showMarkerOptions: boolean = true;
  @Input() showCompactMode: boolean = true;
  
  @ViewChildren(DiceInputComponent) diceComponents:DiceInputComponent[];
  @ViewChildren(ToggleButtonComponentB) diceToggles:ToggleButtonComponentB[];

  ngAfterViewInit(){
    
  }

  constructor(
    private utils: Utilities,
    private engine: DiceRoller
  ){}

  test(checked){
    console.log(checked);
  }

  roll(){
    return "ciao";
  }

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

  onDiceRoll(newRequest: RollRequest[]){
    if (!newRequest){return this.rolls}
    if (typeof(newRequest) === "object"){newRequest = [].concat(newRequest)}
    console.log(newRequest);
    if (!this.addRollsMode) {
      this.removeDicesFromRolls(newRequest[0].faces);
    }
    newRequest.forEach(request => {request.modifierIsActiveOnEveryRoll = this.addModifierToEveryRoll});

    this.rolls.push(...this.engine.roll(newRequest).details);
    console.log(this.rolls);
    this.calculateTotals();
  }

  resetMarkOver(){
    this.dicesSet.map(dice => {dice.markOver = dice.faces});
  }

  onDiceReset(dice: DiceGui){
    this.removeDicesFromRolls(dice.faces);
    this.calculateTotals();
  }

  private removeDicesFromRolls(diceTypeToBeRemoved: number): void{
    console.log("removing dice", diceTypeToBeRemoved);
    if (!diceTypeToBeRemoved || this.rolls.length < 1) {
      return
    }
    for (var i = (this.rolls.length - 1); i > -1; i--){
      if (this.rolls[i].faces === diceTypeToBeRemoved){
        this.rolls.splice(i, 1);
      }
    }
  }

  onDiceToggle(receivedData){
    for (var i = 0; i < this.dicesSet.length; i++){
      if (receivedData.id.faces === this.dicesSet[i].faces){
        this.dicesSet[i].isDiceVisible = receivedData.value;
        if (receivedData.value === false){this.onDiceReset(receivedData.id)}
        return;
      }
    }
  }

  onOptionChange(receivedData){
    console.log("option changed", receivedData);
    if (!receivedData) return

    switch (receivedData.id) {
      case "opt_compact":
        this.showCompactMode = receivedData.value;
        break;
        case "opt_addRolls":
        this.addRollsMode = receivedData.value;
        break;
        case "opt_modifierAllRolls":
        this.addModifierToEveryRoll = receivedData.value;
        break;
        case "opt_luck":
        this.showLuckRate = receivedData.value;
        break;
        case "opt_marker":
        this.showMarkerOptions = receivedData.value;
        break;
      default:
        console.log("Unknown option:", receivedData);
        break;
    }
  }

  private calculateTotals(){
    this.totals = [];
    this.totalRollOnTable = 0;
    if (this.rolls.length > 0) {
      var tmpTotal = this.engine.calculateTotals(this.rolls, this.dicesSet);
      this.totals = tmpTotal.totalsByDice;
      this.totalRollOnTable = tmpTotal.tot;
    }
  }

  calculateSuccessfulRolls(dice: DiceGui): number{
    if (!dice || !this.rolls){return 0};
    
    var count: number = 0;
    for (var i = 0; i < this.rolls.length; i++){
      if (this.rolls[i].faces === dice.faces){
        if (this.rolls[i].roll > dice.markOver){
          count ++;
        }
      }
    }
    return count;
  }

  toggleSettingsPane(){
    this.settingPaneIsVisibe = !this.settingPaneIsVisibe;
  }

  ngOnInit(){
    this.resetMarkOver()
  }

}