import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ICharacter, ICharacterRequest } from '../models/character';
import { Iskill, IPgSkill, IPgSkillsCollection, ISkillRequest } from '../models/pgSkills';
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
          this.getData(params.id);
        })
    }

    mapPgSkills(rolesBookSkills: Iskill[], characterSkills: IPgSkillsCollection): IPgSkill[] {
      
      return rolesBookSkills.map((rolesBookSkill: Iskill) => {
          var skill = {...rolesBookSkill} as IPgSkill;
          var characterSkill = characterSkills[skill.name];

          console.log("characterSkill", skill.name, characterSkills)
          
          skill.rank = characterSkill ? characterSkill.rank : 0 ;
          
          return skill;
          
      }) as IPgSkill[];
     
    };
    
    getSkillForm(skillForm:IPgSkill[]): ISkillRequest[]{
      var newSkillArr = skillForm.filter(s => s.rank > 0);

      return newSkillArr.map(s => ({skill: s._id.toString(), rank: s.rank}));

    }

    getData(id:string){
    
      Observable.zip(
        this.charactersService.get(),
        this.pgSkillsService.get()
      ).subscribe(([characters, skills]) => {
                       
        characters.map(character=>{
          if(character._id === id)
          {
            this.character = character;
            this.skills = this.mapPgSkills(skills, this.character.skills);
          }
        });

      })
    }
    

    save(){
      var updateCharacter = {...this.character, skills: this.getSkillForm(this.skills)};
      delete updateCharacter._id;
      this.charactersService
        .put(this.character._id, updateCharacter as ICharacterRequest)
        .subscribe((character : ICharacter)=>{
          console.log(character)
        })
    }

    updatedHp(newValue){
        this.current=newValue;
                
      };    
      
      
      
    

      
        
    

    
}