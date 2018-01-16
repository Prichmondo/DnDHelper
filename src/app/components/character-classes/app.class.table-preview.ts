import { Component,
         OnInit,
         Input, Output,
         EventEmitter }                 from '@angular/core';

import { IClass }                       from '../../models/CharacterClass'; 

import { RulebookService }              from '../../services/rulebook.service';
import { Utilities }                    from '../../utilities/app.utilities';
import { DnDUtilities }                 from '../../utilities/app.utilities.dnd';

export class ClassTableData {
    level: number;
    baseAttackBonus: string[];
    savingThrowFortitude: string;
    savingThrowReflexes: string;
    savingThrowWill: string;
    specials: string[];
}


@Component({

    selector:"class-form-table-preview",
    templateUrl:"./app.class.table-preview.html",
    styleUrls: ['./app.class.table-preview.css']
})

export class ClassTablePreview {

    
    ruleBook: any;
    tablePreview: ClassTableData[] = [];
    selectedLevel: number = 0;

    @Input() characterClass: IClass;
    @Input() title: string;
    @Input() highlightedLevel: number = 0;
    @Input() rowClickable: boolean = false;
    @Output() rowClickAction: EventEmitter<ClassTableData> = new EventEmitter<ClassTableData>();

    constructor(
        private utils: Utilities,
        private dndUtils: DnDUtilities,
        private ruleBookService: RulebookService,
    ){};
    
    onLineSelected(line: ClassTableData){
        if (this.rowClickable){
            this.rowClickAction.emit(line);
        }
    }

    updateTable(){
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
                specials: (!this.characterClass.classLevels[i] || !this.characterClass.classLevels[i].specials)? [] : this.characterClass.classLevels[i].specials.map(special => special.name)
            }
        }
        console.log("after table update", this.tablePreview);
    }

    ngOnInit(){
        if (!this.title) {
            if (this.characterClass.name) {
                this.title = this.characterClass.name.concat(" - Class progression table");
            } else {
                this.title = "Class progression table";
            }
        }
        console.log("init",this.characterClass);
    }

    ngAfterViewChecked(){
        this.updateTable();
    }
}
