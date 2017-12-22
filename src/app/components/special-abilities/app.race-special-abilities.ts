import { Component,
         Input,
         Output,
         OnInit,
         EventEmitter,
         ViewChild,
         ViewChildren,
         AfterViewInit,
         QueryList }                from '@angular/core';
import { validateConfig }           from '@angular/router/src/config';

import { ISpecialAbilities }        from '../../models/race';

import { Utilities }                from '../../utilities/app.utilities';
import { ModalService }             from '../../services/modal.service'
import { SpecialAbilitiesService }  from '../../services/special.abilities.service';
import { SpecialAbilityForm } from 'app/components/special-abilities/app.race-specials.form';

export interface ISpecialAbilitiesList extends ISpecialAbilities {

  selected?: boolean;
  unsaved?: boolean;
}        

@Component({
  selector: 'app-race-special-abilities',
  templateUrl: './app.race-special-abilities.html',
  styleUrls: ['./app.race-special-abilities.css'],
})

export class SpecialAbilitiesComponent implements AfterViewInit{
  
  title = 'Race Special Abilities';
  specials: ISpecialAbilitiesList[] = [];
  saveWarning: boolean = false;
  currentSearch: string;
  filterCount: number = 0;

  //component options
  @Input() tableIsSelectable: boolean = false;
  @Input() selected: string[] = [];
  @Input() canEdit: boolean = true;

  @Output() returnedSeletion: EventEmitter<string[]> = new EventEmitter<string[]>();

  @ViewChild(SpecialAbilityForm) specialForm: SpecialAbilityForm;
  
  ngAfterViewInit(){
    
  }

  constructor(
    private utils: Utilities,
    private modalService: ModalService,
    private specialService: SpecialAbilitiesService
  ){}


  rowSelect(id: string){
    if (!id){return}

    for (var i = 0; i < this.specials.length; i++){
      if (id === this.specials[i]._id){
        this.specials[i].selected = !this.specials[i].selected;
        this.saveWarning = true;
        return
      }
    }
  }

  add(){
    this.modalService.toggle("specialsFormModal");
    this.specialForm.id = "-1";
    this.specialForm.name = this.utils.trim(this.currentSearch);
    this.specialForm.description = "";
    this.utils.setFocus("specialDescription");
  }

  edit(special: ISpecialAbilitiesList){
    this.modalService.toggle("specialsFormModal");
    this.specialForm.id = special._id;
    this.specialForm.name = special.name;
    this.specialForm.description = special.description;
    this.utils.setFocus("specialName");
  }

  delete(special: ISpecialAbilitiesList){
    if (this.utils.confirmBox("Are you sure you want to delete the following special ability?\n\n" +
                              this.utils.Ucase(special.name) +
                              "\n\nPlease note this operation cannot be reverted and the ability will be removed from all characters")){
      this.specialService
        .delete(special._id)
        .subscribe((response: any) => {
          for (var i = 0; i < this.specials.length; i++){
            if (this.specials[i]._id === special._id){
              this.specials.splice(i, 1);
              break;
            }
          }
        })
    }
  }

  checkKey(e){
    if (e.keyCode == 27) {
      this.currentSearch = "";
      return;
    }

    if (e.keyCode == 13 && this.filterCount === 0) {
      this.add();
      return;
    }
  }

  onFormClosed(newSpecial: ISpecialAbilitiesList){
    if (newSpecial && newSpecial._id !== "-1"){
      if (this.filterCount > 0){ //edit table line
        for (var i = 0; i < this.specials.length; i++){
          if (newSpecial._id === this.specials[i]._id){
            this.specials[i].name = newSpecial.name;
            this.specials[i].description = newSpecial.description;
            break;
          }
        }
      } else { //add line to table
        newSpecial.selected = true;
        newSpecial.unsaved = true;
        this.specials.unshift(newSpecial);
        this.currentSearch = "";
      }
    }
    this.modalService.toggle("specialsFormModal");
    this.utils.setFocus("specialSearchBox");
  }

  private applyTextFilter(specials: ISpecialAbilitiesList[], filter: string): any[] {
    if (!filter || filter.length === 0) {
      this.filterCount = specials.length
      return specials;
    }

    var filteredList: ISpecialAbilitiesList[];

    filteredList = specials.filter(item => (
        this.utils.trimUCase(item.name).includes(this.utils.trimUCase(filter))
        || this.utils.trimUCase(item.description).includes(this.utils.trimUCase(filter))
    ));
    this.filterCount = filteredList.length;
    return filteredList;
  }

  private sortTable(){
    this.specials.sort(this.utils.sortByKey("selected",true,"name"));
  }

  ngOnInit(){
    /*this.specials = [
      {_id: "0", name: "Scoreggiare Migliorato", description: "Può scoreggiare mentre fa una capriola", selected: false},
      {_id: "1", name: "Maestro Laido", description: "+2 a tutte le prove da laido", selected: true},
      {_id: "2", name: "Peto eroico", description: "Una volta al giorno, se gli scappa una scoreggia può dare la colpa a un goblin. Non cumulabile con Scoreggiare migliorato", selected: false},
      {_id: "3", name: "Visione del vero", description: "A lui nun ce lo freghi", selected: false},
      {_id: "4", name: "Scurovisione", description: "Vedi sempre come se avessi gli occhiali da sole", selected: true},
      {_id: "5", name: "Immunità ai veleni", description: "Puoi mangiare il cilantro senza che ti venga il cagotto", selected: false},
      {_id: "6", name: "Immunità al fuoco", description: "Sì sì, come no.", selected: false}
    ];*/

    this.specialService
      .get()
      .subscribe((response: any[])=>{
          this.specials = response;

          for (var i = 0; i < this.specials.length; i++){
            this.specials[i].selected = false;
            this.specials[i].unsaved = false;
          }

          if (this.selected.length > 0){
            for (i = 0; i < this.selected.length; i++){
              for (var j = 0; j < this.specials.length; j++){
                if (this.selected[i] === this.specials[j]._id){
                  this.specials[j].selected = true;
                }
              }
            }
          }
          this.sortTable();
      });
  }

}