import { Component, OnInit }            from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';
import { NgForm }                       from '@angular/forms';

import { IClass }                       from '../../models/CharacterClass'; 
import { RulebookService }              from '../../services/rulebook.service';
import { CharacterClassService }        from '../../services/characterClasses.service';
import { Utilities }                    from '../../utilities/app.utilities';
import { DnDUtilities }                 from '../../utilities/app.utilities.dnd';
import { forEach } from '@angular/router/src/utils/collection';

import { HIT_DICES }                    from '../../mocks/mock-dices';
import { Dice } from 'app/models/dice';

export class ClassTableView {
    level: number;
    baseAttackBonus: string[];
    savingThrowFortitude: string;
    savingThrowReflexes: string;
    savingThrowWill: string;
    specials: string[];
}


@Component({

    selector:"class-form",
    templateUrl:"./app.class.form.html",
    styleUrls: ['./app.class.form.css']
})

export class ClassForm {

    characterClass: IClass;
    ruleBook: any;
    tablePreview: ClassTableView[] = [];
    availableHitDices: Dice[] = HIT_DICES;
    selectedLevel: number = 0;

    constructor(
        private utils: Utilities,
        private dndUtils: DnDUtilities,
        private ruleBookService: RulebookService,
        private CharacterClassService: CharacterClassService,
        private activatedRoute: ActivatedRoute,
        private router: Router){};

    
    updatePreviewTable(){
        if (!this.characterClass) {return}
        if (this.characterClass.levels < 1){this.characterClass.levels = 1}
        if (this.characterClass.levels > 30){this.characterClass.levels = 30}

        if (this.characterClass.levels !== this.tablePreview.length){
            if (this.characterClass.levels < this.tablePreview.length){
                this.tablePreview.splice(this.characterClass.levels - 1, this.tablePreview.length - this.characterClass.levels);
            }
        }

        for (var i = 0; i < (this.characterClass.levels); i++){
            this.tablePreview[i] = {
                level: i + 1,
                baseAttackBonus: this.dndUtils.calculateAllAttackBonuses(this.dndUtils.calculateBaseAttack(i + 1, this.characterClass.baseAttackBonus))
                    .map(bonus => this.utils.formatNumberAsTextForceSign(bonus)),
                savingThrowFortitude: this.utils.formatNumberAsTextForceSign(this.dndUtils.calculateSavingThrow(i + 1, this.characterClass.savingThrows.fortitude)),
                savingThrowReflexes: this.utils.formatNumberAsTextForceSign(this.dndUtils.calculateSavingThrow(i + 1, this.characterClass.savingThrows.reflex)),
                savingThrowWill: this.utils.formatNumberAsTextForceSign(this.dndUtils.calculateSavingThrow(i + 1, this.characterClass.savingThrows.will)),
                specials: ["prova 1", "prova 2"]
            }
        }
        console.log(this.tablePreview);
    }

    private createSpecialsInTable(level): string[]{
        var outputSpecials: string[] = [];

        for (var i = 0; i < this.characterClass.specials[level -1].length; i++){
            outputSpecials.push(this.characterClass.specials[level -1][i].name);
        }

        return outputSpecials;
    }

    editSpecials(level: number){
        if (!this.characterClass.specials[level - 1]){
            console.log("selected level:" + level, "-1");
        } else {
            console.log(this.characterClass.specials[level - 1]);
        }
    }
    
    ngOnInit(){

        this.ruleBookService
            .get()
            .subscribe((ruleBook)=>{
                this.ruleBook = ruleBook;
                console.log("RuleBook", this.ruleBook);

                
                this.activatedRoute
                    .params
                    .subscribe((params)=>{
                        if(typeof params.id !== "undefined"){
                            this.CharacterClassService
                                .getById(params.id)
                                .subscribe((response:any)=>{
                                    this.characterClass = response;
                                    this.updatePreviewTable();
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
                                type: "",
                                hitDice: 4,
                                skills: [],
                                specials: [[]]
                            }
                            this.updatePreviewTable();
                        }
                    })
            });

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
  
}