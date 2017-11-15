import { Component,
         Input,
         Output,
         OnInit,
         EventEmitter,
         ViewChildren,
         AfterViewInit,
         QueryList }                from '@angular/core';
import { validateConfig }           from '@angular/router/src/config';

import { ISpecialAbilities }        from '../../models/race';

import { Utilities }                from '../../utilities/app.utilities';


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
  
  ngAfterViewInit(){
    
  }

  constructor(
    private utils: Utilities,
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

  edit(id: string){

  }

  delete(id: string){

  }

  onSearchBoxChange(value: string){
    console.log("textbox changed:", value);
  }

  private applyTextFilter(specials: ISpecialAbilitiesList[], filter: string): any[] {
    console.log(specials, filter);
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

  ngOnInit(){
    this.specials = [
      {_id: "0", name: "Scoreggiare Migliorato", description: "Può scoreggiare mentre fa una capriola"},
      {_id: "1", name: "Maestro Laido", description: "+2 a tutte le prove da laido", selected: true},
      {_id: "2", name: "Peto eroico", description: "Una volta al giorno, se gli scappa una scoreggia può dare la colpa a un goblin. Non cumulabile con Scoreggiare migliorato"},
      {_id: "3", name: "Visione del vero", description: "A lui nun ce lo freghi"},
      {_id: "4", name: "Scurovisione", description: "Vedi sempre come se avessi gli occhiali da sole", selected: true},
      {_id: "5", name: "Immunità ai veleni", description: "Puoi mangiare il cilantro senza che ti venga il cagotto"},
      {_id: "6", name: "Immunità al fuoco", description: "Sì sì, come no."}
    ];

  }

}