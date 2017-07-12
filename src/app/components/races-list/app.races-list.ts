import { Component, OnInit, Input }     from '@angular/core';
import { Router }                       from '@angular/router';

import { Race }                         from '../../models/race';
import { RACES }                        from '../../mocks/mock-races';
import { RacesService }                 from '../../services/races.service';

import { FormatRaceSize,
         FormatRaceAbilities }          from './app.race-list.pipes'
//import { CharactersService } from '../services/characthers.service';

@Component({

    selector:"races-list",
    templateUrl:"./app.races-list.html",
    

})
export class RacesList{

    //races: Race[] = RACES;
    races: Race[] = [];

    constructor(
        private racesService: RacesService,
        private router: Router
        ){}

   
    ngOnInit(){

        this.racesService
            .get()
            .subscribe((response: Race[])=>{
                console.log(response);
                this.races = response;
            });
    };
    
}