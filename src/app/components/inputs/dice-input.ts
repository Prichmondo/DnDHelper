import { Component,
         Input,
         Output,
         EventEmitter,
         OnInit }                   from '@angular/core';

import { Utilities }                from '../../utilities/app.utilities';
import { InputNumberComponent }     from './input-number';

import { Dice, RollRequest }        from '../../models/dice';

@Component({
  selector: 'dice-input',
  templateUrl: './dice-input.html',
  styleUrls: ['./dice-input.css']
})

export class DiceInputComponent {
    @Input() dice :Dice = {faces: 4};
    @Input() quantity :number = 0;
    @Input() modifier :number = 0;
    @Input() showRollButton :boolean = true;

    @Output() rollDiceEvent: EventEmitter<RollRequest> = new EventEmitter<RollRequest>();
    @Output() resetDiceEvent: EventEmitter<Dice> = new EventEmitter<Dice>();

    rollRequest: RollRequest;
    
    constructor(
      private utils: Utilities,
    ){}

    roll(){
      if (this.quantity > 0) {
        this.rollDiceEvent.emit(this.rollRequest = {faces: this.dice.faces, throws: Math.floor(this.quantity), modifier: Math.floor(this.modifier)});
      } else{
        this.resetDiceEvent.emit(this.dice);
      }
    }

    reset(){
      this.quantity = 0;
      this.modifier = 0;
      this.roll();
    }

}