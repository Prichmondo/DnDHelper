import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { INpc } from '../../../../models/inpc';

import { Utilities } from '../../../../utilities/app.utilities';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {

  newName = '';
  newArrayType = [
     'Character',
     'Enemy',
     'Neutral'
  ];
  newType = 'Neutral';
  newImagepath = '';
  newBaseInit = 0;
  newQuantity = 1;

  @Output() characterAdded = new EventEmitter<INpc>();

  onAddCharacter() {
    this.characterAdded.emit({
      charName: this.newName,
      charOfType: this.newType,
      charImagepath: this.newImagepath,
      charBaseInit: this.newBaseInit,
      charQuantity: this.newQuantity,
      selected: false,
      initiative: this.getInitiative(this.newBaseInit),
      isTurn: false
    });
  }
  setNewType(e) {
    this.newType = e.split(' ')[1];
  }

  getInitiative(initBonus: number): number {

    return this.utilities.getRandomInteger(1, 20) + initBonus;
  }

  constructor(private utilities : Utilities) { }

  ngOnInit() {
  }

}
