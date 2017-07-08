import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Race } from '../../models/race';
import { RACES } from '../../mocks/mock-races';
//import { CharactersService } from '../services/characthers.service';

@Component({

    selector:"races-list",
    templateUrl:"./app.races-list.html",
    

})
export class RacesList{

    races: Race[] = RACES;
    

    constructor(
        //private charactersService: CharactersService,
        private router: Router
        ){}

   
    ngOnInit(){
    /*    this.charactersService
            .get()
            .subscribe((response: ICharacter[])=>{
                console.log(response);
                this.characters = response;
            });
    };
    */
    }
}