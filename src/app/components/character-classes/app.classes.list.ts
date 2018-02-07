import { Component, OnInit, Input }     from '@angular/core';
import { Router }                       from '@angular/router';

import { IClass }                       from '../../models/CharacterClass';
import { CharacterClassService }        from '../../services/characterClasses.service';
import { Utilities }                    from '../../utilities/app.utilities';

@Component({

    selector:"classes-list",
    templateUrl:"./app.classes.list.html",
    styleUrls: ['./app.classes.list.scss']

})
export class ClassesList{
    
    characterClasses: IClass[];    

    constructor(
        private characterClassService: CharacterClassService,
        private router: Router,
        private utils: Utilities
    ){}

    add(){
        this.router.navigate(["/character-class"]);
    }

    edit(id: string){
        if (!id) return;
        this.router.navigate(["/character-class", id]);
    }

    delete(characterClass: IClass){
        if (!characterClass) return;

        if (!this.utils.confirmBox("Are you sure to permanently remove the class " + characterClass.name + "?\n\nPlease note this will affect all the characters using this class!!")){
            return;
        }

        this.characterClassService
            .delete(characterClass._id)
            .subscribe((response: any) => {
                for (var i = 0; i < this.characterClasses.length; i++){
                    if (characterClass._id === this.characterClasses[i]._id){
                        this.characterClasses.splice(i, 1);
                        break;
                    }
                }
            });
    }

    ngOnInit(){
        this.characterClassService
            .get()
            .subscribe((response:IClass[])=>
                {
                    this.characterClasses = response;
                })
                
    };
    
}

  


   