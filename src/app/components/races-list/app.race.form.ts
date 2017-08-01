import { Component, OnInit, Input }     from '@angular/core';
import { Router }                       from '@angular/router';

import { InputNumberComponent }         from '../inputs/input-number';

import { Race, IAbilities }             from '../../models/race';
import { RacesService }                 from '../../services/races.service';
import { RulebookService }              from '../../services/rulebook.service';

@Component({

    selector:"race-form",
    templateUrl:"./app.race.form.html",
    

})

export class RaceForm {

    rulebook: RulebookService[] = [];

    @Input() race :Race = {name: "", type: "", size: "",
        abilitiesModifiers: {
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0}
    }  
    

    constructor(
        private racesService: RacesService,
        private rulebookService: RulebookService,
        private router: Router
        ){}

    ngOnInit(){
        this.rulebookService
            .get()
            .subscribe((response: RulebookService[])=>{
                this.rulebook = response;
            });

        //if (this.race.type === ""){this.race.type = this.rulebook.raceType[0]}
    }

    raceSave(){
        console.log(this.race);
    }
}
