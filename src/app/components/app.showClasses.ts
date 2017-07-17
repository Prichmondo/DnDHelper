import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IClass, AttackBonusProgress,SaveThrowsProgress,ISaveThrows } from '../models/CharacterClass';
import { fighterMock } from '../mocks/mock-class';
import { CharacterClassService } from '../services/characterClasses.service';

@Component({

    selector:"show-class",
    templateUrl:"./app.showClasses.html",
    

})
export class ShowClasses{
    
    /* characterClassService: IClass[] =fighterMock */
    characterClasses: IClass[] /*= 
    {
        name:"Fighter",
        levels:20,
        saveThrows: {
            fortitude: SaveThrowsProgress.Fast,
            reflexes: SaveThrowsProgress.Slow,
            will: SaveThrowsProgress.Slow         
        },
        attackBonus: AttackBonusProgress.Fast
    };*/

    

    constructor(
        private characterClassService:CharacterClassService,
        private router:Router

    ){   }


    ngOnInit(){
        this.characterClassService
                .get()
                .subscribe((response:IClass[])=>
                    {
                        console.log(response);
                        this.characterClasses = response;
                    
                    })
                    
                };         
      
    }

  


   