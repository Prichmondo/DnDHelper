import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ICharacter } from '../models/character';
import { CharactersService } from '../services/characthers.service';
import { ShowCharacters} from './app.showCharacters';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './app.characterSheet.html',
  styleUrls: ['./app.characterSheet.css'],
  providers: [CharactersService]
})
export class CharacterSheetComponent {
  
    characters: ICharacter[];
    hp = 100;
    current= this.hp;
    

    constructor(private charactersService: CharactersService){
      
      
    };
     updatedHp(newValue){
          this.current=newValue;
                 
        };    
      
        
      
    

      
        
    

    
}