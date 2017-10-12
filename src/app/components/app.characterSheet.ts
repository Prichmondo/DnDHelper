import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ICharacter } from '../models/character';
import { Iskill } from '../models/pgSkills';
import { PgClass } from '../models/pgClass';
import { CharactersService } from '../services/characthers.service';
import { PgSkillsService } from '../services/pgSkills.service';
import { ShowCharacters} from './app.showCharacters';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './app.characterSheet.html',
  styleUrls: ['./app.characterSheet.css']
})
export class CharacterSheetComponent {
  
    character: ICharacter = {
      firstName:"",
      lastName:"",
      campaign: null,
      race:"",
      classes: []
    };

    skills: Iskill[];
    
    hp = 100;
    current= this.hp;
    

    constructor(
      private charactersService: CharactersService,
      private pgSkillsService: PgSkillsService,
      private activatedRoute: ActivatedRoute){
    };


    ngOnInit(){

      this.activatedRoute
        .params
        .subscribe(params=>{
          console.log("params", params);
          this.getCharacter(params.id);
        })
      
      this.pgSkillsService
        .get()
        .subscribe((response: Iskill[])=>{
            console.log("hey" + response);
            this.skills = response;
        });
    }

    getCharacter(id:string){
      this.charactersService.get().subscribe(characters => {
        characters.map(character=>{
          if(character._id === id)
          {
            this.character = character;
            return false;
          }
        });

      })
    }

    updatedHp(newValue){
        this.current=newValue;
                
      };    
      
        
      
    

      
        
    

    
}