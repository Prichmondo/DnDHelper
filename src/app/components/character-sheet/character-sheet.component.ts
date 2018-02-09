import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

import { RulebookService } from '../../services/rulebook.service';
import { CharactersService } from '../../services/characters.service';

import { ICharacter } from '../../models/Character';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {

  character: ICharacter
  rulebook: RulebookService

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharactersService,
    private rulebookService: RulebookService
  ) { }

  ngOnInit() {
    this.activatedRoute
    .params
    .subscribe(params => {
        if (typeof params.id !== "undefined") {
            this.characterService
                .getById(params.id)
                .subscribe((character: ICharacter) => {
                    this.character = character;
                    console.log("Character", character);
                })
        } else{
            this.character = {
                _id: null, 
                name: "",
                race: "",
                classes: "",
                alignment: "",
                deity: "",
                size: "",
                age: 15,
                gender: "",
                height: 160,
                weight: 60,
                eyes: "Brown",
                heir: "Brown",
                skin: "White",
                hitPoints: 1,
                campaign: null,
                skills: {},
                abilities: {
                    strength: 10,
                    dexterity: 10,
                    constitution: 10,
                    intelligence: 10,
                    wisdom: 10,
                    charisma: 10}
                };
        }
      });
  }

}
