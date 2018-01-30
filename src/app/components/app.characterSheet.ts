import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
//import { InfiniteScrollModule }     from 'ngx-infinite-scroll';

import { ICharacter, ICharacterRequest } from '../models/character';
import { IAbilities } from '../models/Abilities';
import { Iskill, IPgSkill, IPgSkillsCollection, ISkillRequest } from '../models/pgSkills';
import { PgClass } from '../models/pgClass';
import { CharactersService } from '../services/characthers.service';
import { PgSkillsService } from '../services/pgSkills.service';
import { ShowCharacters} from './app.showCharacters';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './app.characterSheet.html',
  styleUrls: ['./app.characterSheet.scss']
})
export class CharacterSheetComponent {
  
    character: ICharacter = {
      firstName:"",
      lastName:"",
      campaign: null,
      race:"",
      classes:[],
      skills: {} as IPgSkillsCollection,
      abilities: {} as IAbilities
      
    };
    @Input() id: string;

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
            this.checkAbilities(this.character);
            console.log(character.abilities.strength)
            this.skills = this.mapPgSkills(skills, this.character.skills);
          }
        });

      })
    }
    
    checkAbilities(character){

      if (typeof character.abilities === "undefined" || character.abilities === null){
        
        character.abilities = {
          strength: 0,
          dexterity: 0,
          constitution: 0,
          intelligence: 0,
          wisdom: 0,
          charisma: 0 
        };
              
      };
      
    };
    
  
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
        this.current= newValue;
                
      };    
      
    onScroll(){
      console.log("scrolled!")
    }  
      
      
    

      
        
    

    
}