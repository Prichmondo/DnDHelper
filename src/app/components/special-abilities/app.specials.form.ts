import { Component,
            Input,
            Output,
            OnInit,
            EventEmitter }          from '@angular/core';
import { validateConfig }           from '@angular/router/src/config';

import { ISpecialAbility }        from '../../models/specialAbility';

import { Utilities }                from '../../utilities/app.utilities';
import { SpecialAbilitiesService }  from '../../services/special.abilities.service';


@Component({
    selector: 'app-special-abilities-form',
    templateUrl: './app.specials.form.html',
    styleUrls: ['./app.specials.form.scss'],
})

export class SpecialAbilityForm {
    
    specials: ISpecialAbility[] = [];
    
    @Input() id: string = "-1";
    @Input() name: string = "";
    @Input() description: string = "";

    @Output() specialFormOutput: EventEmitter<ISpecialAbility> = new EventEmitter<ISpecialAbility> ()

    constructor (
        private utils: Utilities,
        private specialService: SpecialAbilitiesService,
    ) {}

    cancelEdit(){
        event.preventDefault()
        var special: ISpecialAbility = {
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

        this.specialService
        .get()
        .subscribe((response: any[])=>{
            this.specials = response;
            for (var i = 0; i < this.specials.length; i++) {
                if (this.utils.Ucase(this.specials[i].name) === this.utils.trimUCase(this.name) && this.id !== this.specials[i]._id){
                    window.alert("Another special ability with the same name already exists\nPlease choose a different name.");
                    return;
                }
            }
    
            var special: ISpecialAbility = {
                _id: this.id,
                name: this.utils.trim(this.name),
                description: this.utils.trim(this.description)    
            };
            
            if (this.id === "-1") {
                special._id = null;
                this.specialService
                    .post(special)
                    .subscribe((res: any) => {
                        special._id = res._id;
                        this.specialFormOutput.emit(special);
                    });
            } else {
                this.specialService
                    .put(special)
                    .subscribe((res: any) => {
                        this.specialFormOutput.emit(special);
                    });
            }
        });
    }

    checkKey(e){
        if (e.keyCode == 27) {
            this.cancelEdit();
            return;
        }
    }
  
    forceValueUpdate(currentSpecial: ISpecialAbility) {
        this.id = currentSpecial._id;
        this.name = currentSpecial.name;
        this.description = currentSpecial.description;
    }

    ngOnInit() {

        this.specialService
        .get()
        .subscribe((response: any[])=>{
            this.specials = response;
        });

    }
}
