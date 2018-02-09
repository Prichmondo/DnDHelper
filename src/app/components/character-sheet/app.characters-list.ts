import { Component, OnInit, Input }     from '@angular/core';
import { Router }                       from '@angular/router';

import { ICharacter }                   from '../../models/Character';
import { CharactersService }            from '../../services/characters.service';
import { Utilities }                    from '../../utilities/app.utilities';

@Component({

    selector:"characters-list",
    templateUrl:"./app.characters-list.html",
    styleUrls: ['./app.characters-list.scss']

})
export class CharactersList{

    characters: ICharacter[];
    

    constructor(
        private charactersService: CharactersService,
        private router: Router,
        private utils: Utilities
        ){}

    edit(id: string){
        this.router.navigate(["/character-sheet", id]);
    }

    add(){
        this.router.navigate(["/character-sheet"]);
    }

    delete(character: ICharacter){
        if (!character) return;

        if (!this.utils.confirmBox("Are you sure to permanently remove the character " + character.name + "?")){
            return;
        }

        this.charactersService
            .delete(character._id)
            .subscribe((response: any) => {
                for (var i = 0; i < this.characters.length; i++){
                    if (character._id === this.characters[i]._id){
                        this.characters.splice(i, 1);
                        break;
                    }
                }
            });
    }
   
    ngOnInit(){
        this.charactersService
            .get()
            .subscribe((response: ICharacter[])=>{
                console.log(response);
                this.characters = response;
            });
    };
}