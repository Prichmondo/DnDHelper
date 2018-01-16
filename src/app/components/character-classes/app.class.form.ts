import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { NgForm }                       from '@angular/forms';

import { ClassTablePreview,
         ClassTableData }               from './app.class.table-preview';

import { IClass }                       from '../../models/CharacterClass'; 
import { RulebookService }              from '../../services/rulebook.service';
import { CharacterClassService }        from '../../services/characterClasses.service';
import { Utilities }                    from '../../utilities/app.utilities';
import { DnDUtilities }                 from '../../utilities/app.utilities.dnd';
import { forEach } from '@angular/router/src/utils/collection';

import { HIT_DICES }                    from '../../mocks/mock-dices';
import { Dice } from 'app/models/dice';

@Component({

    selector:"class-form",
    templateUrl:"./app.class.form.html",
    styleUrls: ['./app.class.form.css']
})

export class ClassForm {

    characterClass: IClass;
    ruleBook: any;
    availableHitDices: Dice[] = HIT_DICES;
    selectedLevel: number = 0;
    initComplete: boolean = false;

    @ViewChild(ClassTablePreview) tablePreview: ClassTablePreview;

    constructor(
        private utils: Utilities,
        private dndUtils: DnDUtilities,
        private ruleBookService: RulebookService,
        private CharacterClassService: CharacterClassService,
        private activatedRoute: ActivatedRoute,
        private router: Router){};

    
    updatePreviewTable(){
        if (this.initComplete){
            this.tablePreview.characterClass = this.characterClass;
            this.tablePreview.updateTable();
        }
    }

    private createSpecialsInTable(level): string[]{
        var outputSpecials: string[] = [];

        for (var i = 0; i < this.characterClass.classLevels[level -1].specials.length; i++){
            outputSpecials.push(this.characterClass.classLevels[level -1].specials[i].name);
        }

        return outputSpecials;
    }

    editSpecials(line: ClassTableData){
        if (!this.characterClass.classLevels[line.level - 1] || !this.characterClass.classLevels[line.level - 1].specials){
            console.log("selected level:" + line.level, "-1");
        } else {
            console.log(this.characterClass.classLevels[line.level - 1].specials);
        }
    }

    saveClass(){
        
        this.CharacterClassService
            .post(this.CharacterClassService.mapForUpdate(this.characterClass))
            .subscribe((response:any)=>{
                console.log("Saving...", response)
            })
    }
    updateClass(){
        this.CharacterClassService
            .update(this.CharacterClassService.mapForUpdate(this.characterClass))
            .subscribe((response :any)=>{
                console.log("Updating...", response)
                this.router.navigate(["/Classes"]);
            })
    }

    onUpdate(){
        if(this.characterClass._id){
            this.updateClass();
            
        }else{
            this.saveClass();
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
                        if(typeof params.id !== "undefined"){
                            this.CharacterClassService
                                .getById(params.id)
                                .subscribe((response:any)=>{
                                    this.characterClass = response;
                                    console.log(this.characterClass);
                                    //this.updatePreviewTable();
                                })
                        }
                        else{
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
                                classLevels: [{}]
                            }
                            //this.updatePreviewTable();
                        }
                    })
            });

    }

    ngAfterViewChecked(){
        this.initComplete = true;
        //this.updatePreviewTable();
    }
    
}