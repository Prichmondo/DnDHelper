import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ICharacter } from '../models/Character';
import { CharactersService } from '../services/characthers.service';

@Component({

    selector:"show-char",
    templateUrl:"./app.showCharacters.html",
    

})
export class ShowCharacters{

    characters: ICharacter[];
    

    constructor(
        private charactersService: CharactersService,
        private router: Router
        ){}

    onSelect(character: ICharacter){
        this.router.navigate(["/character-sheet", character._id]);
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