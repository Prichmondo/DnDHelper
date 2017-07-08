import { Component,
         Input,
         Output,
         EventEmitter,
         OnInit }                   from '@angular/core';

import { Utilities }                from '../../utilities/app.utilities';
import { InputNumberComponent }     from './input-number';
import { Dice }                     from '../../models/dice';
import { Roll }                     from '../../models/roll';

@Component({
  selector: 'dice-input',
  templateUrl: './dice-input.html',
  styleUrls: ['./dice-input.css']
})

export class DiceInputComponent {
    @Input() dice :Dice = {name: "d4", faces: 4};
    @Input() quantity :number = 0;
    @Input() modifier :number = 0;
    @Input() showRollButton :boolean = true;

    @Output() rollDiceEvent: EventEmitter<Roll[]> = new EventEmitter<Roll[]>();
    @Output() resetDiceEvent: EventEmitter<Dice> = new EventEmitter<Dice>();

    rolls: Roll[] = [];
    
    constructor(
      private utils: Utilities,
    ){}

    roll(){
      console.log("click q = "+this.quantity + "m = "+this.modifier);
      if (this.quantity > 0) {
        this.rolls = []
        this.modifier = Math.floor(this.modifier);
        console.log("started");
        console.log(this.dice);

        for (var i = 0; i < this.quantity; i++){
          this.rolls.push({
            dice: this.dice,
            modifier: this.modifier,
            roll: 0
          })
        }
        console.log(this.rolls);
        this.rollDiceEvent.emit(this.rolls);
      } else{
        console.log("reset "+this.dice.name);
        this.resetDiceEvent.emit(this.dice);
      }
    }

    reset(){
      this.quantity = 0;
      this.modifier = 0;
      this.roll();
    }

}