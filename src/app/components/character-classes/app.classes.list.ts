import { Component, OnInit, Input }     from '@angular/core';
import { Router }                       from '@angular/router';

import { IClass }                       from '../../models/CharacterClass';
import { CharacterClassService }        from '../../services/characterClasses.service';

@Component({

    selector:"classes-list",
    templateUrl:"./app.classes.list.html",
    

})
export class ClassesList{
    
    characterClasses: IClass[];    

    constructor(
        private characterClassService:CharacterClassService,
        private router:Router
    ){}

    onSelect(characterClass:IClass){
        if(characterClass){
            this.router.navigate(["/character-class", characterClass._id]);
        }else{
            this.router.navigate(["/character-class"]); 
        }        
    }

    onDelete(characterClass:IClass, index: number){
        if(characterClass && characterClass._id){
            this.characterClassService
                .delete(characterClass._id)
                .subscribe((response:any)=>{
                    if(response.ok){
                        this.characterClasses.splice(index, 1);
                    }
                });
        }
    }

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

  


   