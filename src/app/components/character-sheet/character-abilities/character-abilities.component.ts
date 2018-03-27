import { Component, OnInit, Input }    from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

import { InputNumberSmallComponent } from '../../inputs/input-number-small';

import { Utilities }            from '../../../utilities/app.utilities';
import { DnDUtilities }            from '../../../utilities/app.utilities.dnd';

import { ICharacter }           from '../../../models/Character';

@Component({
  selector: 'character-abilities-component',
  templateUrl: './character-abilities.component.html',
  styleUrls: ['./character-abilities.component.scss']
})

export class CharacterAbilitiesComponent {
    
    @Input() character: ICharacter

    form;
    minAbility: number = 0;
    maxAbility: number = 30;
    minModifier: number = -100;
    maxModifier: number = 100;
    abilityStringValidator: string = "\\d*";

    constructor(
        //private charactersService: CharactersService,
        //private router: Router,
        private utils: Utilities,
        private dndUtils: DnDUtilities
        ){}

    updateValues(base: number, temporary: number): string{

        this.character.abilities.strength_modifiers.total = Math.floor(this.character.abilities.strength) + this.character.abilities.strength_modifiers.calculated + Math.floor(this.character.abilities.strength_modifiers.temporary);
        this.character.abilities.strength_modifiers.modifier = this.dndUtils.calculateAbilityModifier(this.character.abilities.strength_modifiers.total);

        return "";
    }

    ngOnInit() {
        console.log(this.character);
        if (!this.character.abilities.strength_modifiers){
            this.character.abilities.strength_modifiers = {
                temporary: 0,
                calculated: 0,
                total: 0,
                modifier: 0,
            }
        }
    }
}