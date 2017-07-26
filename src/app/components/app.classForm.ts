import { Component, OnInit }         from '@angular/core';
import { Router }                    from '@angular/router';
import { NgForm }                    from '@angular/forms';

import { IClass, AttackBonusProgress,SaveThrowsProgress,ISaveThrows } from '../models/CharacterClass';      

@Component({

    selector:"class-form",
    templateUrl:"./app.classForm.html"
})
export class ClassForm {

    characterClass:IClass;
    stFort="Slow";
    
    constructor(){}

    ngOnInit(){
        this.characterClass = {
            _id:"",
            levels:0,
            name:"",
            attackBonus:AttackBonusProgress.Slow,
            saveThrows:{
                fortitude: SaveThrowsProgress.Slow,
                reflexes: SaveThrowsProgress.Slow,
                will: SaveThrowsProgress.Slow
            }


        }
    }
    onSubmit(classForm: NgForm){
        console.log();
    }
}