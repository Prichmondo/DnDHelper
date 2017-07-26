import { Component, OnInit }         from '@angular/core';
import { Router }                    from '@angular/router';
import { NgForm }                    from '@angular/forms';

import { IClass, AttackBonusProgress,SaveThrowsProgress,ISaveThrows } from '../models/CharacterClass'; 
import { RulebookService }              from '../services/rulebook.service';

@Component({

    selector:"class-form",
    templateUrl:"./app.classForm.html"
})
export class ClassForm {

    characterClass:IClass;
    stFort="Slow";
    ruleBook: any;

    constructor(private ruleBookService:RulebookService){}

    ngOnInit(){

        this.ruleBookService
            .get()
            .subscribe((ruleBook)=>{
                this.ruleBook = ruleBook;
                console.log("RuleBook", this.ruleBook);

                
                this.characterClass = {
                    _id: "",
                    attackBonus: ruleBook.attackBonusType[0],
                    levels: 20,
                    name: "",
                    saveThrows: {
                        fortitude: ruleBook.savingThrowsBonusType[0],
                        reflexes: ruleBook.savingThrowsBonusType[0],
                        will: ruleBook.savingThrowsBonusType[0]
                    }
                }
            });

    }
    onSubmit(classForm: NgForm){
        console.log(this.characterClass);
    }
}