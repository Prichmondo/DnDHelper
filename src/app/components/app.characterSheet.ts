import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './app.characterSheet.html',
  styleUrls: ['./app.characterSheet.css']
})
export class CharacterSheetComponent {
  
    hp=100;
        
    updatedHp(newValue){
      this.hp=newValue;
      
      return this.hp
      
    }

    
}