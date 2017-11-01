import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ICharacter, ICharacterRequest } from '../models/character';
import { Iskill, IPgSkill, IPgSkillsCollection } from '../models/pgSkills';
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
      classes: [],
      skills: {} as IPgSkillsCollection
    };

    skills: IPgSkill[];
    
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

          this.pgSkillsService
          .get()
          .subscribe((response: Iskill[])=>{
              console.log("hey" + response);
              this.skills = this.mapPgSkills(response, this.character.skills);
          });
        })
    }

    mapPgSkills(rolesBookSkills: Iskill[], characterSkills: IPgSkillsCollection): IPgSkill[] {
      
      return rolesBookSkills.map((rolesBookSkill: Iskill) => {
          var skill = {...rolesBookSkill} as IPgSkill;
          var characterSkill = characterSkills[skill.name];
          skill.rank = characterSkill ? characterSkill.rank : 0 ;
          
          return skill;
          
      }) as IPgSkill[];
     
    };
    
    getSkillForm(skillForm:IPgSkill[]){
      var newSkillArr = skillForm.filter(s => s.rank > 0);

      return newSkillArr.map(s => ({_id: s._id, rank: s.rank}));

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
    

    save(){
      var updateCharacter = {...this.character, skills: this.getSkillForm(this.skills)};
      delete updateCharacter._id;
      this.charactersService.put(this.character._id, updateCharacter as ICharacterRequest).subscribe((character : ICharacter)=>{
        console.log(character)
      })
    }

    updatedHp(newValue){
        this.current=newValue;
                
      };    
      
      
      
    

      
        
    

    
}