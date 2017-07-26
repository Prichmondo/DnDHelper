import { Component, OnInit, Input }     from '@angular/core';
import { Router }                       from '@angular/router';

import { Race }                         from '../../models/race';
import { RacesService }                 from '../../services/races.service';


@Component({

    selector:"race-form",
    templateUrl:"./app.race.form.html",
    

})

export class RaceForm {
    constructor(
        private racesService: RacesService,
        private router: Router
        ){}

    ngOnInit(){
        
    }
}
