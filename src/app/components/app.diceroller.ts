import { Component, Input, OnInit } from '@angular/core';

import { Dice } from './dice';
import { DICES } from '../mocks/mock-dices';
import { Utilities } from '../utilities/app.utilities'

@Component({
  selector: 'app-dice-roller',
  templateUrl: './app.diceroller.html',
  styleUrls: ['./app.diceroller.css']
})

export class DiceRollerComponent {
  title = 'Dice Roller';
  prova = 0;
  dicesOnTable: Dice[] = DICES;

  private totalRoll = 0;

  private d4Rolled = [];
  private d4Added = 0;
  private d4RolledTotal = 0;
  private d4Total = 0;
  @Input() private d4N = 0;
  @Input() private d4Add = 0;

  private d6Rolled = [];
  private d6Added = 0;
  private d6RolledTotal = 0;
  private d6Total = 0;
  @Input() private d6N = 0;
  @Input() private d6Add = 0;

  private d8Rolled = [];
  private d8Added = 0;
  private d8RolledTotal = 0;
  private d8Total = 0;
  @Input() private d8N = 0;
  @Input() private d8Add = 0;

  private d10Rolled = [];
  private d10Added = 0;
  private d10RolledTotal = 0;
  private d10Total = 0;
  @Input() private d10N = 0;
  @Input() private d10Add = 0;

  private d12Rolled = [];
  private d12Added = 0;
  private d12RolledTotal = 0;
  private d12Total = 0;
  @Input() private d12N = 0;
  @Input() private d12Add = 0;

  private d20Rolled = [];
  private d20Added = 0;
  private d20RolledTotal = 0;
  private d20Total = 0;
  @Input() private d20N = 0;
  @Input() private d20Add = 0;

  private d100Rolled = [];
  private d100Added = 0;
  private d100RolledTotal = 0;
  private d100Total = 0;
  @Input() private d100N = 0;
  @Input() private d100Add = 0;

  private dCustomRolled = [];
  private dCustomAdded = 0;
  private dCustomRolledTotal = 0;
  private dCustomTotal = 0;
  @Input() private dCustomN = 0;
  @Input() private dCustomAdd = 0;
  
  constructor(
    private utils: Utilities
  ){}

  ngOnInit(){
    this.resetDices("all",true);
  }

  resetDices(diceName: string, silent: boolean){
    if (!silent){
      if (this.utils.confirmBox("Do you really want to clear "+ diceName +" dices?") === false) {return null}
    }

    for (var i = 0; i < this.dicesOnTable.length; i++){
      if (this.utils.Ucase(diceName) === this.utils.Ucase(this.dicesOnTable[i].name) || this.utils.Ucase(diceName) === "ALL") {
        this.dicesOnTable[i].modifier = 0;
        this.dicesOnTable[i].rolls = [];
      }
    }
    if (this.utils.Ucase(diceName) === "D4" || this.utils.Ucase(diceName) === "ALL") {
      this.d4Rolled = [];
      this.d4Added = 0;
      this.d4RolledTotal = 0;
      this.d4Total = 0;
      if (this.utils.Ucase(diceName) === "ALL"){
        this.d4N = 0;
        this.d4Add = 0;
      }
    }
    if (this.utils.Ucase(diceName) === "D6" || this.utils.Ucase(diceName) === "ALL") {
      this.d6Rolled = [];
      this.d6Added = 0;
      this.d6RolledTotal = 0;
      this.d6Total = 0;
      if (this.utils.Ucase(diceName) === "ALL"){
        this.d6N = 0;
        this.d6Add = 0;
      }
    }
    if (this.utils.Ucase(diceName) === "D8" || this.utils.Ucase(diceName) === "ALL") {
      this.d8Rolled = [];
      this.d8Added = 0;
      this.d8RolledTotal = 0;
      this.d8Total = 0;
      if (this.utils.Ucase(diceName) === "ALL"){
        this.d8N = 0;
        this.d8Add = 0;
      }
    }
    if (this.utils.Ucase(diceName) === "D10" || this.utils.Ucase(diceName) === "ALL") {
      this.d10Rolled = [];
      this.d10Added = 0;
      this.d10RolledTotal = 0;
      this.d10Total = 0;
      if (this.utils.Ucase(diceName) === "ALL"){
        this.d10N = 0;
        this.d10Add = 0;
      }
    }
    if (this.utils.Ucase(diceName) === "D12" || this.utils.Ucase(diceName) === "ALL") {
      this.d12Rolled = [];
      this.d12Added = 0;
      this.d12RolledTotal = 0;
      this.d12Total = 0;
      if (this.utils.Ucase(diceName) === "ALL"){
        this.d12N = 0;
        this.d12Add = 0;
      }
    }
    if (this.utils.Ucase(diceName) === "D20" || this.utils.Ucase(diceName) === "ALL") {
      this.d20Rolled = [];
      this.d20Added = 0;
      this.d20RolledTotal = 0;
      this.d20Total = 0;
      if (this.utils.Ucase(diceName) === "ALL"){
        this.d20N = 0;
        this.d20Add = 0;
      }
    }
    if (this.utils.Ucase(diceName) === "D100" || this.utils.Ucase(diceName) === "ALL") {
      this.d100Rolled = [];
      this.d100Added = 0;
      this.d100RolledTotal = 0;
      this.d100Total = 0;
      if (this.utils.Ucase(diceName) === "ALL"){
        this.d100N = 0;
        this.d100Add = 0;
      }
    }
    if (this.utils.Ucase(diceName) === "DCUSTOM" || this.utils.Ucase(diceName) === "ALL") {
      console.log("entered reset dCustom");
      this.dCustomRolled = [];
      this.dCustomAdded = 0;
      this.dCustomRolledTotal = 0;
      this.dCustomTotal = 0;
      if (this.utils.Ucase(diceName) === "ALL"){
        this.dCustomN = 0;
        this.dCustomAdd = 0;
      }
    }
  }

  rollLauncher(
    d4N: number, d4Mod: number,
    d6N: number, d6Mod: number,
    d8N: number, d8Mod: number,
    d10N: number, d10Mod: number,
    d12N: number, d12Mod: number,
    d20N: number, d20Mod: number,
    d100N: number, d100Mod: number,
    dCustomFaces: number, dCustomN: number, dCustomMod: number,
    withReset: boolean){

    dCustomFaces = Math.floor(dCustomFaces);
    if (dCustomFaces < 2) { dCustomFaces = 2 };
    
    if (d4N > 0){
      if (withReset === true) { this.resetDices("D4",true) };
      this.d4Rolled = this.roll("D4", Math.floor(d4N), Math.floor(d4Mod));
      this.d4Added = d4Mod * d4N;
    }
    if (d6N > 0){ 
      if (withReset === true) { this.resetDices("D6",true) };
      this.d6Rolled = this.roll("D6", Math.floor(d6N), Math.floor(d6Mod));
      this.d6Added = d6Mod * d6N;
    }
    if (d8N > 0){ 
      if (withReset === true) { this.resetDices("D8",true) };
      this.d8Rolled = this.roll("D8", Math.floor(d8N), Math.floor(d8Mod));
      this.d8Added = d8Mod * d8N;
    }
    if (d10N > 0){ 
      if (withReset === true) { this.resetDices("D10",true) };
      this.d10Rolled = this.roll("D10", Math.floor(d10N), Math.floor(d10Mod));
      this.d10Added = d10Mod * d10N;
    }
    if (d12N > 0){ 
      if (withReset === true) { this.resetDices("D12",true) };
      this.d12Rolled = this.roll("D12", Math.floor(d12N), Math.floor(d12Mod));
      this.d12Added = d12Mod * d12N;
    }
    if (d20N > 0){ 
      if (withReset === true) { this.resetDices("D20",true) };
      this.d20Rolled = this.roll("D20", Math.floor(d20N), Math.floor(d20Mod));
      this.d20Added = d20Mod * d20N;
    }
    if (d100N > 0){ 
      if (withReset === true) { this.resetDices("D100",true) };
      this.d100Rolled = this.roll("D100", Math.floor(d100N), Math.floor(d100Mod));
      this.d100Added = d100Mod * d100N;
    }
    if (dCustomN > 0){
      if (withReset === true) { this.resetDices("DCustom",true) };
      this.setCustomDice(dCustomFaces);
      this.dCustomRolled = this.roll("DCustom", Math.floor(dCustomN), Math.floor(dCustomMod));
      this.dCustomAdded = dCustomMod * dCustomN;
    }

    return this.calculateTotal("ALL");
  }


  roll(diceName: string, quantity: number, modifier: number): number[]{
    if (modifier < 0){
      modifier = 0;
    } else{
      modifier = Math.floor(modifier);
    }
    if (quantity > 0){
      var i = 0;
      var wFound = false;
      do {
        if (this.utils.Ucase(diceName) === this.utils.Ucase(this.dicesOnTable[i].name)) {
          wFound = true;
          console.log("dice found");
          this.dicesOnTable[i].modifier = modifier;
          for (var iRoll = 1; iRoll <= quantity; iRoll++){
            this.dicesOnTable[i].rolls.push(this.utils.getRandomInteger(1,this.dicesOnTable[i].faces));
          }
        } else{
          i = i + 1;
        }
      } while (wFound === false && i < this.dicesOnTable.length);
    } else {
      this.resetDices(diceName,true);
    }
    console.log(this.dicesOnTable);
    return this.dicesOnTable[i].rolls;
  }

  private calculateTotal(diceName: string): number{
    var iRoll = 0;
    for (var i = 0; i < this.dicesOnTable.length; i++){
      switch (this.dicesOnTable[i].name){
        case "D4":
          if (this.utils.Ucase(diceName) === this.dicesOnTable[i].name || this.utils.Ucase(diceName) === "ALL") {
            this.d4Added = 0;
            this.d4RolledTotal = 0;
            this.d4Total = 0;
            for (iRoll = 0; iRoll < this.dicesOnTable[i].rolls.length; iRoll++) {
              this.d4RolledTotal = this.d4RolledTotal + this.dicesOnTable[i].rolls[iRoll];
            }
            this.d4Added = this.d4Add * this.dicesOnTable[i].rolls.length;
            this.d4Total = this.d4RolledTotal + this.d4Added;
            if (this.utils.Ucase(diceName) != "ALL") { return this.d4Total };
          }
        case "D6":
          if (this.utils.Ucase(diceName) === this.dicesOnTable[i].name || this.utils.Ucase(diceName) === "ALL") {
            this.d6Added = 0;
            this.d6RolledTotal = 0;
            this.d6Total = 0;
            for (iRoll = 0; iRoll < this.dicesOnTable[i].rolls.length; iRoll++) {
              this.d6RolledTotal = this.d6RolledTotal + this.dicesOnTable[i].rolls[iRoll];
            }
            this.d6Added = this.d6Add * this.dicesOnTable[i].rolls.length;
            this.d6Total = this.d6RolledTotal + this.d6Added;
            if (this.utils.Ucase(diceName) != "ALL") { return this.d6Total };
          }
        case "D8":
          if (this.utils.Ucase(diceName) === this.dicesOnTable[i].name || this.utils.Ucase(diceName) === "ALL") {
            this.d8Added = 0;
            this.d8RolledTotal = 0;
            this.d8Total = 0;
            for (iRoll = 0; iRoll < this.dicesOnTable[i].rolls.length; iRoll++) {
              this.d8RolledTotal = this.d8RolledTotal + this.dicesOnTable[i].rolls[iRoll];
            }
            this.d8Added = this.d8Add * this.dicesOnTable[i].rolls.length;
            this.d8Total = this.d8RolledTotal + this.d8Added;
            if (this.utils.Ucase(diceName) != "ALL") { return this.d8Total };
          }
        case "D10":
          if (this.utils.Ucase(diceName) === this.dicesOnTable[i].name || this.utils.Ucase(diceName) === "ALL") {
            this.d10Added = 0;
            this.d10RolledTotal = 0;
            this.d10Total = 0;
            for (iRoll = 0; iRoll < this.dicesOnTable[i].rolls.length; iRoll++) {
              this.d10RolledTotal = this.d10RolledTotal + this.dicesOnTable[i].rolls[iRoll];
            }
            this.d10Added = this.d10Add * this.dicesOnTable[i].rolls.length;
            this.d10Total = this.d10RolledTotal + this.d10Added;
            if (this.utils.Ucase(diceName) != "ALL") { return this.d10Total };
          }
        case "D12":
          if (this.utils.Ucase(diceName) === this.dicesOnTable[i].name || this.utils.Ucase(diceName) === "ALL") {
            this.d12Added = 0;
            this.d12RolledTotal = 0;
            this.d12Total = 0;
            for (iRoll = 0; iRoll < this.dicesOnTable[i].rolls.length; iRoll++) {
              this.d12RolledTotal = this.d12RolledTotal + this.dicesOnTable[i].rolls[iRoll];
            }
            this.d12Added = this.d12Add * this.dicesOnTable[i].rolls.length;
            this.d12Total = this.d12RolledTotal + this.d12Added;
            if (this.utils.Ucase(diceName) != "ALL") { return this.d12Total };
          }
        case "D20":
          if (this.utils.Ucase(diceName) === this.dicesOnTable[i].name || this.utils.Ucase(diceName) === "ALL") {
            this.d20Added = 0;
            this.d20RolledTotal = 0;
            this.d20Total = 0;
            for (iRoll = 0; iRoll < this.dicesOnTable[i].rolls.length; iRoll++) {
              this.d20RolledTotal = this.d20RolledTotal + this.dicesOnTable[i].rolls[iRoll];
            }
            this.d20Added = this.d20Add * this.dicesOnTable[i].rolls.length;
            this.d20Total = this.d20RolledTotal + this.d20Added;
            if (this.utils.Ucase(diceName) != "ALL") { return this.d20Total };
          }
        case "D100":
          if (this.utils.Ucase(diceName) === this.dicesOnTable[i].name || this.utils.Ucase(diceName) === "ALL") {
            this.d100Added = 0;
            this.d100RolledTotal = 0;
            this.d100Total = 0;
            for (iRoll = 0; iRoll < this.dicesOnTable[i].rolls.length; iRoll++) {
              this.d100RolledTotal = this.d100RolledTotal + this.dicesOnTable[i].rolls[iRoll];
            }
            this.d100Added = this.d100Add * this.dicesOnTable[i].rolls.length;
            this.d100Total = this.d100RolledTotal + this.d100Added;
            if (this.utils.Ucase(diceName) != "ALL") { return this.d100Total };
          }
        case "DCustom":
          if (this.utils.Ucase(diceName) === this.dicesOnTable[i].name || this.utils.Ucase(diceName) === "ALL") {
            this.dCustomAdded = 0;
            this.dCustomRolledTotal = 0;
            this.dCustomTotal = 0;
            for (iRoll = 0; iRoll < this.dicesOnTable[i].rolls.length; iRoll++) {
              this.dCustomRolledTotal = this.dCustomRolledTotal + this.dicesOnTable[i].rolls[iRoll];
            }
            this.dCustomAdded = this.dCustomAdd * this.dicesOnTable[i].rolls.length;
            this.dCustomTotal = this.dCustomRolledTotal + this.dCustomAdded;
            if (this.utils.Ucase(diceName) != "ALL") { return this.dCustomTotal };
          }
      }


    }
    this.totalRoll = this.d4Total + this.d6Total + this.d8Total + this.d10Total + this.d12Total + this.d20Total + this.d100Total + this.dCustomTotal;
    return this.totalRoll;
  }

  setCustomDice(faces: number){
    if (Math.floor(faces) < 2){ faces = 2 }
    var i = 0
    do {
      if (this.dicesOnTable[i].name === "DCustom") {
        this.dicesOnTable[i].faces = Math.floor(faces);
        return true;
      }
      i++;
    } while (i < this.dicesOnTable.length);
  }

  getCustomDice(): number{
    var i = 0
    do {
      if (this.dicesOnTable[i].name === "DCustom") {
        return this.dicesOnTable[i].faces;
      }
      i++;
    } while (i < this.dicesOnTable.length);
  }
  
  rollAll(){
    //this.rollLauncher(this.d4N,this.d4Add,this.d6N,this.d6Add,this.d8N,this.d8Add,this.d10N,this.d10Add,this.d12N,this.d12Add,this.d20N,this.d20Add,this.d100N,this.d100Add,this.getCustomDice(),this.dCustomN,this.dCustomAdd,true);
    this.rollD4();
    this.rollD6();
    this.rollD8();
    this.rollD10();
    this.rollD12();
    this.rollD20();
    this.rollD100();
    this.rollDCustom();
  }
  
  rollD4(){
    if (this.d4N < 1){ this.resetDices("D4",true) };
    this.d4N = Math.floor(this.d4N);
    this.rollLauncher(this.d4N, this.d4Add,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,true);
  }

  rollD6(){
    if (this.d6N < 1){ this.resetDices("D6",true) };
    this.d6N = Math.floor(this.d6N);
    this.rollLauncher(0,0,this.d6N,this.d6Add,0,0,0,0,0,0,0,0,0,0,0,0,0,true);
  }

  rollD8(){
    if (this.d8N < 1){ this.resetDices("D8",true) };
    this.d8N = Math.floor(this.d8N);
    this.rollLauncher(0,0,0,0,this.d8N,this.d8Add,0,0,0,0,0,0,0,0,0,0,0,true);
  }
  rollD10(){
    if (this.d10N < 1){ this.resetDices("D10",true) };
    this.d10N = Math.floor(this.d10N);
    this.rollLauncher(0,0,0,0,0,0,this.d10N,this.d10Add,0,0,0,0,0,0,0,0,0,true);
  }
  rollD12(){
    if (this.d12N < 1){ this.resetDices("D12",true) };
    this.d12N = Math.floor(this.d12N);
    this.rollLauncher(0,0,0,0,0,0,0,0,this.d12N,this.d12Add,0,0,0,0,0,0,0,true);
  }
  rollD20(){
    if (this.d20N < 1){ this.resetDices("D20",true) };
    this.d20N = Math.floor(this.d20N);
    this.rollLauncher(0,0,0,0,0,0,0,0,0,0,this.d20N,this.d20Add,0,0,0,0,0,true);
  }
  rollD100(){
    if (this.d100N < 1){ this.resetDices("D100",true) };
    this.d100N = Math.floor(this.d100N);
    this.rollLauncher(0,0,0,0,0,0,0,0,0,0,0,0,this.d100N,this.d100Add,0,0,0,true);
  }
  rollDCustom(){
    if (this.dCustomN < 1){ this.resetDices("DCustom",true) };
    this.dCustomN = Math.floor(this.dCustomN);
    this.rollLauncher(0,0,0,0,0,0,0,0,0,0,0,0,0,0,this.getCustomDice(),this.dCustomN,this.dCustomAdd,true);
  }


  private spinnerHelper(up: boolean, controlName): void{
    console.log("spinnerHelper!!" + controlName);
    if (up === true) {
      controlName = controlName + 1;
    } else {
      controlName = controlName - 1;
    }
  }
}