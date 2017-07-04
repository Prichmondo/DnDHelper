import { Component, Input, OnInit } from '@angular/core';

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
        console.log(this.rolls);

        for (var i = 0; i < this.quantity; i++){
          this.rolls.push({
            dice: this.dice[0],
            modifier: this.modifier,
            roll: this.utils.getRandomInteger(1, this.dice.faces)
          })
        }
        return this.rolls;
      }
    }

}