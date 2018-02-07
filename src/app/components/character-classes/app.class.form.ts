import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { NgForm }                       from '@angular/forms';

import { ClassTablePreview,
         ClassTableData }               from './app.class.table-preview';
import { SpecialAbilitiesComponent }    from '../special-abilities/app.special-abilities';

import { IClass }                       from '../../models/CharacterClass';
import { ISpecialAbility }              from '../../models/specialAbility';
import { Dice }                         from '../../models/dice';

import { RulebookService }              from '../../services/rulebook.service';
import { CharacterClassService }        from '../../services/characterClasses.service';
import { Utilities }                    from '../../utilities/app.utilities';
import { DnDUtilities }                 from '../../utilities/app.utilities.dnd';
import { ModalService }                 from '../../services/modal.service'
import { forEach } from '@angular/router/src/utils/collection';

import { HIT_DICES }                    from '../../mocks/mock-dices';

@Component({

    selector:"class-form",
    templateUrl:"./app.class.form.html",
    styleUrls: ['./app.class.form.scss']
})

export class ClassForm {

    characterClass: IClass;
    ruleBook: any;
    availableHitDices: Dice[] = HIT_DICES;
    selectedLevel: number = 0;
    initComplete: boolean = false;
    manualValidators = {
        name: true
    };

    @ViewChild(ClassTablePreview) tablePreview: ClassTablePreview;
    @ViewChild(SpecialAbilitiesComponent) specialsComp: SpecialAbilitiesComponent;

    constructor(
        private utils: Utilities,
        private dndUtils: DnDUtilities,
        private ruleBookService: RulebookService,
        private CharacterClassService: CharacterClassService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private modalService: ModalService
    ){};

    
    updatePreviewTable(){
        if (this.initComplete){
            if (this.characterClass.levels < 1){this.characterClass.levels = 1}
            if (this.characterClass.levels > 30){this.characterClass.levels = 30}
            this.tablePreview.characterClass = this.characterClass;
            this.tablePreview.updateTable();
        }
    }

    editSpecials(line: ClassTableData){
        this.selectedLevel = line.level;
        if (!this.characterClass.classLevels[line.level - 1] || !this.characterClass.classLevels[line.level - 1].specials){
            this.specialsComp.selected = [];
        } else {
            this.specialsComp.selected = this.characterClass.classLevels[line.level - 1].specials.map(special => (special._id));
        }
        this.specialsComp.ngOnInit();
        this.specialsComp.currentSearch = "";
        this.modalService.toggle("classSpecialsModal");
        this.utils.setFocus("specialSearchBox");
    }

    onSpecialAbilitiesSelected(newSelection: ISpecialAbility[]) {
        this.modalService.toggle("classSpecialsModal");
        if (!newSelection || newSelection[0]._id === "-1") {return}
        if (newSelection[0]._id === "-2"){
            this.fixSpecials();
            return;
        }

        this.characterClass.classLevels[this.selectedLevel -1] = {specials: newSelection};
        this.updatePreviewTable();
    }

    private fixSpecials(){

    }

    classSave(){
        if (this.utils.trim(this.characterClass.name).length === 0) {
            this.manualValidators.name = false;
            return;
        }
        this.CharacterClassService
            .get()
            .subscribe((response: any)=>{
                var classList: IClass[];
                classList = response;
                console.log("class list", classList, "class", this.characterClass);
                if (classList.length > 0) {
                    for (var i = 0; i < classList.length; i++){
                        if (classList[i]._id !== this.characterClass._id && this.utils.trimUCase(classList[i].name) === this.utils.trimUCase(this.characterClass.name)){
                            this.manualValidators.name = false;
                            return;
                        }
                    }
                }
                if (this.characterClass._id){
                    this.CharacterClassService
                    .update(this.CharacterClassService.mapForUpdate(this.characterClass))
                    .subscribe((response :any)=>{
                        console.log("Updating...", response)
                        this.router.navigate(["/classes"]);
                    })
                    
                } else {
                    this.CharacterClassService
                    .post(this.CharacterClassService.mapForUpdate(this.characterClass))
                    .subscribe((response:any)=>{
                        console.log("Saving...", response)
                        this.router.navigate(["/classes"]);
                    })
                }       
            })
    }

    cancelEdit(){
        if (this.utils.confirmBox("Cancel editing and go back to Class list?")){
            this.router.navigate(["/classes"]);
        }
    }
      
    ngOnInit(){

        this.ruleBookService
            .get()
            .subscribe((ruleBook)=>{
                this.ruleBook = ruleBook;             
                this.activatedRoute
                    .params
                    .subscribe((params)=>{
                        if (typeof params.id !== "undefined") {
                            this.CharacterClassService
                                .getById(params.id)
                                .subscribe((response:any)=>{
                                    this.characterClass = response;
                                    console.log(this.characterClass);
                                    console.log(this.manualValidators);
                                    //this.updatePreviewTable();
                                })
                        } else {
                            this.characterClass = {
                                baseAttackBonus: ruleBook.attackBonusType[0],
                                levels: 20,
                                name: "",
                                savingThrows: {
                                    fortitude: ruleBook.savingThrowsBonusType[0],
                                    reflex: ruleBook.savingThrowsBonusType[0],
                                    will: ruleBook.savingThrowsBonusType[0]
                                },
                                type: this.ruleBook.classType[0],
                                hitDice: this.availableHitDices[0].faces,
                                skills: [],
                                classLevels: [{specials: []}]
                            }
                            //this.updatePreviewTable();
                            console.log(this.manualValidators)
                        }
                    })
            });

    }

    ngAfterViewChecked(){
        this.initComplete = true;
    }
    
}