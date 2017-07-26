import { Component, OnInit, Input }     from '@angular/core';
import { Router }                       from '@angular/router';

import { Race }                         from '../../models/race';
import { RacesService }                 from '../../services/races.service';
import { RaceForm }                     from './app.race.form';

import { FormatRaceAbilities }          from './app.race-list.pipes'
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
            .subscribe((response: any[])=>{
                console.log(response);
                this.races = response;
            });
    };
    
}