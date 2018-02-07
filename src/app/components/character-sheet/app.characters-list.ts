import { Component, OnInit, Input }     from '@angular/core';
import { Router }                       from '@angular/router';

import { ICharacter }                   from '../../models/Character';
import { CharactersService }            from '../../services/characthers.service';

@Component({

    selector:"characters-list",
    templateUrl:"./app.characters-list.html",
    styleUrls: ['./app.characters-list.scss']

})
export class CharactersList{

    characters: ICharacter[];
    

    constructor(
        private charactersService: CharactersService,
        private router: Router
        ){}

    onSelect(character: ICharacter){
        this.router.navigate(["/character-sheet", character._id]);
    }

    add(){
        this.router.navigate(["/character-sheet"]);
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