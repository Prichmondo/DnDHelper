import { Component, OnInit, Input }    from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Utilities }            from '../../../utilities/app.utilities';

import { ICharacter }           from '../../../models/Character';

@Component({
  selector: 'character-abilities-component',
  templateUrl: './character-abilities.component.html',
  styleUrls: ['./character-abilities.component.scss']
})

export class CharacterAbilitiesComponent {
    
    @Input() character: ICharacter

    constructor(
        //private charactersService: CharactersService,
        //private router: Router,
        private utils: Utilities
        ){}

    ngOnInit() {
        if (this.character){

        }
    }
}