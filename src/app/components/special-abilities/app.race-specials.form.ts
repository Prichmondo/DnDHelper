import { Component,
            Input,
            Output,
            OnInit,
            EventEmitter,
            AfterViewChecked }         from '@angular/core';
import { validateConfig }           from '@angular/router/src/config';

import { ISpecialAbilities }        from '../../models/race';

import { Utilities }                from '../../utilities/app.utilities';
import { SpecialAbilitiesService }  from '../../services/special.abilities.service';


@Component({
    selector: 'app-race-special-abilities-form',
    templateUrl: './app.race-specials.form.html',
    styleUrls: ['./app.race-specials.form.css'],
})

export class SpecialAbilityForm {
    
    specials: ISpecialAbilities[] = [];
    
    @Input() id: string = "-1";
    @Input() name: string = "";
    @Input() description: string = "";

    @Output() specialFormOutput: EventEmitter<ISpecialAbilities> = new EventEmitter<ISpecialAbilities> ()

    constructor (
        private utils: Utilities,
        private specialService: SpecialAbilitiesService,
    ) {}

    cancelEdit(){
        event.preventDefault()
        var special: ISpecialAbilities = {
            _id: "-1",
            name: "cancel",
            description: "cancel"    
        };

        this.specialFormOutput.emit(special);
    }

    specialSave() {
        event.preventDefault();
        if (this.utils.trim(this.name).length === 0 || this.utils.trim(this.description).length === 0) {
            window.alert("Missing required field");
            return;
        }

        for (var i = 0; i < this.specials.length; i++) {
            if (this.utils.Ucase(this.specials[i].name) === this.utils.trimUCase(this.name) && this.id !== this.specials[i]._id){
                window.alert("Another special ability with the same name already exists\nPlease choose a different name.");
                return;
            }
        }

        var special: ISpecialAbilities = {
            _id: this.id,
            name: this.utils.trim(this.name),
            description: this.utils.trim(this.description)    
        };
        
        if (this.id === "-1") {
            special._id = null;
            console.log("before posting",special);
            this.specialService
                .post(special)
                .subscribe((res: any) => {
                    console.log(res);
                    special._id = res._id;
                    console.log("before event:", special);
                    this.specialFormOutput.emit(special);
                });
        } else {
            this.specialService
                .put(special)
                .subscribe((res: any) => {
                    this.specialFormOutput.emit(special);
                });
        }
        
    }

    checkKey(e){
        if (e.keyCode == 27) {
          this.cancelEdit();
          return;
        }
    }
    
    ngAfterViewChecked() {

        /*if (this.id === "-1"){
            document.getElementById("specialDescription").focus();
        } else {
            document.getElementById("specialName").focus();
        }*/
    }


    ngOnInit() {

        this.specialService
        .get()
        .subscribe((response: any[])=>{
            console.log(response);
            this.specials = response;
        });

    }
}
