import { Component, OnInit, Input,
         AfterViewInit }                from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { NgForm }                       from '@angular/forms';

import { InputNumberComponent }         from '../inputs/input-number';

import { Race, IAbilities, ISpeeds }    from '../../models/race';
import { IRulebook }                    from '../../models/rulebook';
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
    tempSpeeds: ISpeeds[] = [];

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
            .subscribe((response: IRulebook)=>{
                this.rulebook = response;
                console.log(this.rulebook.speeds);
                console.log(this.rulebook.speeds.length);
                for (var i = 0; i < this.rulebook.speeds.length; i++){
                    this.tempSpeeds.push({
                        name: this.rulebook.speeds[i],
                        value: 0
                    });
                }
                console.log(this.tempSpeeds);

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
                                speeds: [{name: "Walk", value: 6}],
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
                        this.fixTempSpeeds(this.race.speeds);
                    });

            });
        
        
    }

    raceSave(){
        //check selected speeds
        var wControl: boolean = false;
        for (var i = 0; i < this.tempSpeeds.length; i++){
            if (this.tempSpeeds[i].value > 0){
                wControl = true;
                break;
            }
        }
        if (!wControl){
            alert("You must select at least one movement type");
            return;
        }
        
        this.race.speeds = this.tempSpeeds;

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

    private fixTempSpeeds(loadedSpeeds: ISpeeds[]){
        if (!loadedSpeeds || !this.tempSpeeds || loadedSpeeds.length === 0){return}

        var wFound: boolean = false
        for (var i1 = 0; i1 < loadedSpeeds.length; i1++){
            wFound = false;
            for (var i2 = 0; i2 < this.tempSpeeds.length; i2++){
                if (loadedSpeeds[i1].name === this.tempSpeeds[i2].name){
                    this.tempSpeeds[i2].value = loadedSpeeds[i1].value;
                    wFound = true;
                }
            }
            if (wFound == false){console.log("Error in speed database: loaded data doesn't match rulebook!")}
        }
    }

    ngAfterViewInit(){
    }
}
