import { Component,
         OnInit,
         Input,
         ViewChild }                    from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { NgForm }                       from '@angular/forms';

import { InputNumberComponent }         from '../inputs/input-number';

import { IRace, IRaceUpdate, ISpeeds }  from '../../models/race';
import { ISpecialAbility }              from '../../models/specialAbility';
import { IAbilities }                   from '../../models/Abilities'
import { IRulebook }                    from '../../models/rulebook';
import { RacesService }                 from '../../services/races.service';
import { SpecialAbilitiesService }      from '../../services/special.abilities.service';
import { RulebookService }              from '../../services/rulebook.service';
import { Utilities }                    from '../../utilities/app.utilities';
import { ModalService }                 from '../../services/modal.service'
import { SpecialAbilitiesComponent}     from '../special-abilities/app.special-abilities';
import { SpecialAbilityForm }           from '../special-abilities/app.specials.form';


@Component({

    selector:"race-form",
    templateUrl:"./app.race.form.html",
    styleUrls: ['./app.race.form.scss'],
})

export class RaceForm {

    rulebook: any;
    race: IRace;
    raceToBeSaved: IRaceUpdate;
    tempSpeeds: ISpeeds[] = [];
    tempSpecials: ISpecialAbility[] = [];

    @ViewChild(SpecialAbilitiesComponent) specialList: SpecialAbilitiesComponent;
    @ViewChild(SpecialAbilityForm) specialEditForm: SpecialAbilityForm;

    constructor(
        private racesService: RacesService,
        private specialsService: SpecialAbilitiesService,
        private rulebookService: RulebookService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private utils: Utilities,
        private modalService: ModalService
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
                                .subscribe((race: IRace) => {
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
                                    charisma: 0},
                                specials: []
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
        
        this.raceToBeSaved = {
            _id: "00",
            name: this.race.name,
            type: this.race.type,
            size: this.race.size,
            speeds: this.race.speeds,
            abilitiesModifiers: this.race.abilitiesModifiers,
            specials: this.filterSpecialIDs(this.race.specials)
        };
        this.race._id ? this.raceToBeSaved._id = this.race._id : this.raceToBeSaved._id = null;

        console.log("before save", this.raceToBeSaved);
        if (this.race._id){
            //put
            this.racesService
                .put(this.raceToBeSaved)
                .subscribe((res: any) => {
                    console.log("race put:", res);
                    this.router.navigate(["/races-list"]);
                })
        } else{
            //post
            this.racesService
                .post(this.raceToBeSaved)
                .subscribe((res: any) => {
                    console.log("race post:", res);
                    this.router.navigate(["/races-list"]);
                });
        }
    }

    cancelEdit(){
        if (this.utils.confirmBox("Cancel editing and go back to race list?")){
            this.router.navigate(["/races-list"]);
        }
    }

    addSpecial() {
        this.specialList.selected = this.filterSpecialIDs(this.race.specials);
        this.specialList.currentSearch = "";
        this.specialList.ngOnInit();
        this.modalService.toggle("specialsModal");
        this.utils.setFocus("specialSearchBox");
    }

    editSpecial(special: ISpecialAbility) {
        this.modalService.toggle("specialsDirectEditModal");
        this.specialEditForm.id = special._id;
        this.specialEditForm.name = special.name;
        this.specialEditForm.description = special.description;
    }

    removeSpecial(special: ISpecialAbility) {
        if (!special){return}

        for (var i = 0; i < this.race.specials.length; i++){
            if (this.race.specials[i]._id === special._id){
                this.race.specials.splice(i, 1);
                break;
            }
        }
    }

    onSpecialAbilityEdited(editedSpecial: ISpecialAbility) {
        this.modalService.toggle("specialsDirectEditModal");
        if (!editedSpecial || editedSpecial._id === "-1") {return}

        for (var i = 0; i < this.tempSpecials.length; i++){
            if (this.tempSpecials[i]._id === editedSpecial._id){
                this.tempSpecials[i].name = editedSpecial.name;
                this.tempSpecials[i].description = editedSpecial.description;
                break;
            }
        }
    }

    onSpecialAbilitiesSelected(newSelection: ISpecialAbility[]) {
        this.modalService.toggle("specialsModal");
        if (!newSelection || newSelection[0]._id === "-1") {return}
        if (newSelection[0]._id === "-2"){
            this.fixSpecials();
            return;
        }

        this.race.specials = newSelection
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

    private fixSpecials(){
        var wFound: boolean = false;
        this.specialsService
        .get()
        .subscribe((res: ISpecialAbility[])=>{
            for (var i = 0; i < this.race.specials.length; i++){
                wFound = false;
                for (var j = 0; j < res.length; j++){
                    if (this.race.specials[i]._id === res[j]._id){
                        wFound = true;
                        this.race.specials[i].name = res[j].name;
                        this.race.specials[i].description = res[j].description;
                        break;
                    }
                }
                if (!wFound) {
                    this.race.specials.splice(i, 1);
                }
            }
        });
    }

    private filterSpecialIDs(specials: ISpecialAbility[]): string[]{
        if (!specials || specials.length === 0){return []}

        var specialsIDs: string[] = [];

        for (var i = 0; i < specials.length; i++){
            specialsIDs.push(specials[i]._id);
        }
        return specialsIDs;
    }

}
