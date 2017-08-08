import { Component, OnInit, Input,
         AfterViewInit }                from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { NgForm }                       from '@angular/forms';

import { InputNumberComponent }         from '../inputs/input-number';

import { Race, IAbilities }             from '../../models/race';
import { RacesService }                 from '../../services/races.service';
import { RulebookService }              from '../../services/rulebook.service';
import { Utilities }                    from '../../utilities/app.utilities';

@Component({

    selector:"race-form",
    templateUrl:"./app.race.form.html",
    

})

export class RaceForm {

    rulebook: any;

    race :Race;

    constructor(
        private racesService: RacesService,
        private rulebookService: RulebookService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private utils: Utilities
        ){}

    ngOnInit(){
        this.rulebookService
            .get()
            .subscribe((response: RulebookService[])=>{
                this.rulebook = response;

                this.activatedRoute
                    .params
                    .subscribe(params => {
                        if (typeof params.id !== "undefined") {
                            this.racesService
                                .getById(params.id)
                                .subscribe(race => {
                                    this.race = race;
                                })
                        } else{
                            this.race = {
                                _id: "", 
                                name: "", 
                                type: this.rulebook.raceType[0], 
                                size: this.rulebook.size[0],
                                    abilitiesModifiers: {
                                        strength: 0,
                                        dexterity: 0,
                                        constitution: 0,
                                        intelligence: 0,
                                        wisdom: 0,
                                        charisma: 0}
                                }  
                        }
                    });

            });
        
        
    }

    raceSave(){
        console.log(this.race);
        if (this.race._id){
            //put
            this.racesService
                .put(this.race)
                .subscribe((res: any) => {
                    console.log(res);
                    this.router.navigate(["/races-list"]);
                })
        } else{
            //post
            this.race._id = null;
            this.racesService
                .post(this.race)
                .subscribe((res: any) => {
                    console.log(res);
                    this.router.navigate(["/races-list"]);
                });
        }
    }

    cancelEdit(){
        if (this.utils.confirmBox("Cancel editing and go back to race list?")){
            this.router.navigate(["/races-list"]);
        }
    }

    ngAfterViewInit(){
    }
}
