import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../models/Character';
import { CharactersService } from '../services/characthers.service';

@Component({

    selector:"show-char",
    templateUrl:"./app.showCharacters.html",
    providers: [CharactersService]

})
export class ShowCharacters{

    characters: ICharacter[];

    constructor(
        private charactersService: CharactersService
        ){}

    AddTableRow(row:string){

        
    }
    
    ngOnInit(){
        this.charactersService
            .get()
            .subscribe((response: ICharacter[])=>{
                console.log(response);
                this.characters = response;
            });
    }
}