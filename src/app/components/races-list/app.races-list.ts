import { Component, OnInit, Input }     from '@angular/core';
import { Router }                       from '@angular/router';

import { Race }                         from '../../models/race';
import { RacesService }                 from '../../services/races.service';
import { RaceForm }                     from './app.race.form';
import { Utilities }                    from '../../utilities/app.utilities';

import { FormatRaceAbilities }          from './app.race-list.pipes'
//import { CharactersService } from '../services/characthers.service';

@Component({

    selector:"races-list",
    templateUrl:"./app.races-list.html",
    styleUrls: ['./app.races-list.css']

})
export class RacesList{

    races: Race[] = [];
    utils: Utilities;

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

    edit(id: string){
        this.router.navigate(["/race-form", id]);
    }

    delete(id: string){
        if (!id){return};
        //if (!this.utils.confirmBox("Please confirm record removal. This is a permanent action!")) {return};
        
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
    
}