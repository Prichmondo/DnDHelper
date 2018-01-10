import { Component, OnInit, Input }     from '@angular/core';
import { Router }                       from '@angular/router';

import { IRace }                         from '../../models/race';
import { IAbilities }                   from '../../models/Abilities';

import { RacesService }                 from '../../services/races.service';
import { RaceForm }                     from './app.race.form';
import { Utilities }                    from '../../utilities/app.utilities';

@Component({

    selector:"races-list",
    templateUrl:"./app.races-list.html",
    styleUrls: ['./app.races-list.css']

})
export class RacesList{

    races: IRace[] = [];
    

    constructor(
        private racesService: RacesService,
        private router: Router,
        private utils: Utilities
        ){}

    ngOnInit(){

        this.racesService
            .get()
            .subscribe((response: any[])=>{
                console.log(response);
                this.races = response;
            });
    };

    edit(id: string){
        this.router.navigate(["/race-form", id]);
    }

    delete(id: string){
        if (!id){return};
        if (!this.utils.confirmBox("Please confirm record removal. This is a permanent action!")) {return};
        
        this.racesService
            .delete(id)
            .subscribe((res: any) => {
                console.log(res);
                this.ngOnInit();
            });
    }
    
    add(){
        this.router.navigate(["/race-form"]);
    }

    private formatRaceAbilitiesForRaceList(abilities: IAbilities): string[] {
        if (!abilities) {
            return [];
        }
        var formattedAbilities: string[] = [];
        var count: number = 0;
        if (abilities.strength != 0) {
            count += 1;
            formattedAbilities.push("STR " + this.utils.formatNumberAsTextForceSign(abilities.strength));
        }
        if (abilities.dexterity != 0) {
            count += 1;
            formattedAbilities.push("DEX " + this.utils.formatNumberAsTextForceSign(abilities.dexterity));
        }
        if (abilities.constitution != 0) {
            count += 1;
            formattedAbilities.push("CON " + this.utils.formatNumberAsTextForceSign(abilities.constitution));
        }
        if (abilities.intelligence != 0) {
            count += 1;
            formattedAbilities.push("INT " + this.utils.formatNumberAsTextForceSign(abilities.intelligence));
        }
        if (abilities.wisdom != 0) {
            count += 1;
            formattedAbilities.push("WIS " + this.utils.formatNumberAsTextForceSign(abilities.wisdom));
        }
        if (abilities.charisma != 0) {
            count += 1;
            formattedAbilities.push("CHA " + this.utils.formatNumberAsTextForceSign(abilities.charisma));
        }
        return formattedAbilities;
    }

    
}