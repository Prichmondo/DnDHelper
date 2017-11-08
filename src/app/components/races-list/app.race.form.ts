import { Component, OnInit, Input,
         AfterViewInit }                from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { NgForm }                       from '@angular/forms';

import { InputNumberComponent }         from '../inputs/input-number';
import { TableDisplayData }             from '../table-data/table-display-data';

import { Race, IAbilities, ISpeeds }    from '../../models/race';
import { IRulebook }                    from '../../models/rulebook';
import { RacesService }                 from '../../services/races.service';
import { RulebookService }              from '../../services/rulebook.service';
import { Utilities }                    from '../../utilities/app.utilities';
import { DiceRoller }                   from '../dice-roller/diceroller.engine';
import { RollRequest }                  from '../../models/roll';
import { Dice }                         from '../../models/dice';


@Component({

    selector:"race-form",
    templateUrl:"./app.race.form.html",
    

})

export class RaceForm implements AfterViewInit{

    rulebook: any;

    race :Race;
    tempSpeeds: ISpeeds[] = [];

    constructor(
        private racesService: RacesService,
        private rulebookService: RulebookService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private utils: Utilities,
        private diceRoller: DiceRoller
        ){}

    ngOnInit(){
        this.rulebookService
            .get()
            .subscribe((response: IRulebook)=>{
                this.rulebook = response;
                for (var i = 0; i < this.rulebook.speeds.length; i++){
                    this.tempSpeeds.push({
                        type: this.rulebook.speeds[i],
                        speed: 0
                    });
                }
                
                this.activatedRoute
                    .params
                    .subscribe(params => {
                        if (typeof params.id !== "undefined") {
                            this.racesService
                                .getById(params.id)
                                .subscribe(race => {
                                    this.race = race;
                                    console.log("Razza", race);
                                    this.fixTempSpeeds(this.race.speeds);
                                })
                        } else{
                            this.race = {
                                _id: "", 
                                name: "", 
                                type: this.rulebook.raceType[0], 
                                speeds: [{type: "Walk", speed: 6}],
                                size: this.rulebook.size[0],
                                abilitiesModifiers: {
                                    strength: 0,
                                    dexterity: 0,
                                    constitution: 0,
                                    intelligence: 0,
                                    wisdom: 0,
                                    charisma: 0}
                                }
                            this.fixTempSpeeds(this.race.speeds);
                        }
                        
                    });

            });          
    }

    raceSave(){
        //check selected speeds
        var wControl: boolean = false;
        for (var i = 0; i < this.tempSpeeds.length; i++){
            if (this.tempSpeeds[i].speed > 0){
                wControl = true;
                break;
            }
        }
        if (!wControl && !this.utils.confirmBox("No speed selected for this race. This race won't be able to move. Do you want to confirm race creation?")){
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

        if (!loadedSpeeds || !this.tempSpeeds || loadedSpeeds.length === 0) return

        var wFound: boolean = false;

        for (var i = 0; i < loadedSpeeds.length; i++){
            wFound = false;
            for (var j = 0; j < this.tempSpeeds.length; j++){
                if (loadedSpeeds[i].type === this.tempSpeeds[j].type){
                    this.tempSpeeds[j].speed = loadedSpeeds[i].speed;
                    wFound = true;
                }
            }
            if (wFound == false){console.log("Error in speed database: loaded data doesn't match rulebook!", loadedSpeeds)}
        }
    }

    prova(){
        var tmp: RollRequest[];
        tmp = [
            {dice: {name: "D8", faces: 8}, rolls: 3, modifier: 8, modifierIsActiveOnEveryRoll: false},
            {dice: {name: "D6", faces: 6}, rolls: 4, modifier: 2, modifierIsActiveOnEveryRoll: true},
            {dice: {name: "D20", faces: 20}, rolls: 2},
        ];
        console.log(tmp);
        console.log(this.diceRoller.roll(tmp));
    }

    ngAfterViewInit(){
    }
}
