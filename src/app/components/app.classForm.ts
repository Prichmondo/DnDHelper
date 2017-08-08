import { Component, OnInit }         from '@angular/core';
import { Router, ActivatedRoute }                    from '@angular/router';
import { NgForm }                    from '@angular/forms';

import { IClass, ISaveThrows } from '../models/CharacterClass'; 
import { RulebookService }              from '../services/rulebook.service';
import { CharacterClassService }     from '../services/characterClasses.service';

@Component({

    selector:"class-form",
    templateUrl:"./app.classForm.html"
})
export class ClassForm {

    characterClass:IClass;
    stFort="Slow";
    ruleBook: any;

    constructor(
        private ruleBookService:RulebookService,
        private CharacterClassService:CharacterClassService,
        private activatedRoute:ActivatedRoute){}

    ngOnInit(){

        this.ruleBookService
            .get()
            .subscribe((ruleBook)=>{
                this.ruleBook = ruleBook;
                console.log("RuleBook", this.ruleBook);

                
                this.activatedRoute
                    .params
                    .subscribe((params)=>{
                        if(typeof params.id !== "undefined"){
                            this.CharacterClassService
                                .getById(params.id)
                                .subscribe((response:any)=>{
                                    this.characterClass = response;
                                })
                        }
                        else{
                            
                            this.characterClass = {
                                baseAttackBonus: ruleBook.attackBonusType[0],
                                levels: 20,
                                name: "",
                                savingThrows: {
                                    fortitude: ruleBook.savingThrowsBonusType[0],
                                    reflex: ruleBook.savingThrowsBonusType[0],
                                    will: ruleBook.savingThrowsBonusType[0]
                                },
                                type: "",
                                hitDice:4,
                                skills: [],
                                specials:[]
                            }
                        }
                    })
            });

    }
    
    save(){
        this.CharacterClassService
            .post(this.characterClass)
            .subscribe((response:any)=>{
                console.log("response", response)
            })
    }
  
}