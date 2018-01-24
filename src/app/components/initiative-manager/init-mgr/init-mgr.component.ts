import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { Npc } from '../../../models/npc';
import { INpc } from '../../../models/inpc';
import { ICharacter } from '../../../models/character';

import { LocalStorageManagerService } from '../../../services/local-storage-manager.service';
import { CharactersService } from '../../../services/characthers.service';

@Component({
  selector: 'app-init-mgr',
  templateUrl: './init-mgr.component.html',
  styleUrls: ['./init-mgr.component.scss']
})
export class InitMgrComponent implements OnInit, OnChanges {
  characterList= [];
  indexFrom = null;
  indexTo = null;
  formSelected = false;
  selected = false;
  dropped= false;
  showTime = false;
  showTimeButton = 'Play';
  charInfo = false;
  pgs: ICharacter[];

  @Input() selectedCharacter: INpc;

  newCharacter: INpc = {
    charName: '',
    charBaseInit: 0,
    charImagepath: '',
    charOfType: '',
    charQuantity: 1,
    initiative: 0,
    selected: false
  };

  constructor(private localStorageManager: LocalStorageManagerService, private charactersService: CharactersService) {
  }

  ngOnChanges() {
  }
  ngOnInit() {
    this.charactersService
    .get()
    .subscribe((response: ICharacter[])=>{

        this.pgs = response;
        console.log(this.pgs)
        this.characterListGenerator();
    }); 

    if (this.characterList !== null && this.characterList.length > 0) {
    this.resetData();
    }
  }
  characterListGenerator(){
    if(this.pgs.length >0) {
      for (const pg of this.pgs) {
        this.newCharacter = new Npc (
          pg.firstName + " "+pg.lastName,
          'character',
          '',
          0,
          1,
          false,
          0,
          pg._id
        )
        this.characterList.push(this.newCharacter);
      }
    }
  }
  onDropped() {
    if (this.dropped === false && this.characterList.length > 0) {
      this.dropped = true;
      }else {
      this.dropped = false;
    }
  }

  onCharacterAdded(charData: INpc) {

    this.newCharacter = new Npc(
      charData.charName,
      charData.charOfType,
      charData.charImagepath,
      charData.charBaseInit,
      charData.charQuantity,
      charData.selected,
      charData.initiative,
      charData.id = 0
    );
    this.listSorter(this.newCharacter);
    this.localStorageManager.addItem(0, this.characterList);
  }

  listSorter(character) {
    let index = 0;

    if (this.characterList.length > 0) {

      for ( let i = this.characterList.length - 1; i >= 0; i--) {

        const currentCharacter = this.characterList[i];

        if (
          character.initiative === currentCharacter.initiative && character.charBaseInit === currentCharacter.charBaseInit ||
          character.initiative === currentCharacter.initiative && character.charBaseInit < currentCharacter.charBaseInit ||
          character.initiative < currentCharacter.initiative
        ) {
          index = i + 1;
          break;
        }
      }
    }
    this.characterList.splice(index, 0, character);

    for (const k in this.characterList) {
      if (character) {
      character.id = parseInt(k, 10);
      }
    }
  }

  forceSort() {

    this.characterList.sort(
      function(a, b) { 
      if(a.initiative === b.initiative){
      return (b.charBaseInit - a.charBaseInit);
      } else { 
        return (b.initiative - a.initiative)}; 
      });
  }

  onCharacterMoved(character: INpc) {
    console.log('onMove', character);
    const charIndex = this.characterList.indexOf(character);
    if (this.indexFrom === null && character.selected === false) {
      character.selected = true;
    } else {
      character.selected = false;
    }

    if (this.indexTo === null && this.indexFrom === null) {

      this.indexFrom = charIndex;
      return;

    } else if ( this.indexFrom > -1 && this.indexTo === null) {

      this.indexTo = charIndex;

      if (this.indexFrom > this.indexTo ) {

        const that = this;
        this.clearCssClass();
        this.characterList[this.indexFrom].initiative = this.characterList[this.indexTo].initiative + 1;
        this.characterList.splice(this.indexTo, 0 , this.characterList.splice(this.indexFrom, 1)[0]);
        this.localStorageManager.addItem(0, this.characterList);
        this.indexFrom = null;
        this.indexTo = null;

        return this.characterList;

      }else if (this.indexFrom < this.indexTo   ||
        this.indexTo === 0 && this.indexFrom !== 0) {

        const that = this;
        this.clearCssClass();
        this.characterList[this.indexFrom].initiative = this.characterList[this.indexTo].initiative - 1;
        const removed = this.characterList.splice(this.indexFrom, 1)[0];
        this.characterList.splice((this.indexTo) , 0 , removed);
        this.localStorageManager.addItem(0, this.characterList);
        this.indexFrom = null;
        this.indexTo = null;

        return this.characterList;

      }else if (this.indexFrom === this.indexTo) {

        this.clearCssClass();
        this.indexFrom = null;
        this.indexTo = null;

        console.log('oops');
        return;
      }else {
            alert('NOOOOOOOOOOO è sbagliato!!');
      }
    }
  }
  clearCssClass() {
    const first = this.characterList[this.indexFrom];
    const second = this.characterList[this.indexTo];
    first.selected = false;
    second.selected = false;
  }
  onCharacterEdited(selectedCharacter: INpc) {

    this.localStorageManager.addItem(0, this.characterList);
  }
  onCancel() {
    this.formSelected = false;
    this.selectedCharacter = null;
    this.forceSort();
  }
  onCharacterRemoved(selectedCharacter: INpc) {
    const index = this.characterList.indexOf(selectedCharacter);
    this.characterList.splice(index, 1);
    this.forceSort();
    this.localStorageManager.addItem(0, this.characterList);
    return this.characterList;
  }
  resetData() {
    this.characterList = this.localStorageManager.getItem(0);
    this.forceSort();
  }
  onClickEdit(selectedCharacter: INpc) {
    console.log('onSelected', selectedCharacter);
    this.formSelected = true;
    this.selectedCharacter = selectedCharacter;
    return this.characterList;
  }
  showCharInfo() {
    this.charInfo = !this.charInfo;
  }
  showPlayTurn() {
    this.showTime = !this.showTime;
    if(this.showTime){
      this.showTimeButton = "End";
    }else {
      this.showTimeButton = "Play";
    }
  }
}





