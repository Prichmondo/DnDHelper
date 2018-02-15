import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ICharacter } from '../../../models/Character';
@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  // @Output() characterOutput = new EventEmitter();
  character: {} = {};
  detailsForm: FormGroup;
  post: any;
  name = '';
  charClass = '';
  race = '';
  size: '';
  gender= '';
  heigth: number;
  align = '';
  god  = '';
  weight: number;
  eyes = '';
  hair = '';
  skin = '';
  
  constructor(private fb: FormBuilder) {  this.charDetailsForm() }

  ngOnInit() {
  }
  charDetailsForm() {
    this.detailsForm = this.fb.group({
      name: [this.name , Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      charClass: [this.charClass, Validators.required],
      race: [this.race, Validators.required],
      size: [this.size, Validators.maxLength(1)],
      age: [null, Validators.compose([Validators.min(12), Validators.max(100)])],
      gender: [this.gender],
      heigth: [null, Validators.compose([Validators.min(1.20), Validators.max(2)])],
      align : [this.align, Validators.required],
      god  : [this.god],
      weight: [null, Validators.compose([Validators.min(40), Validators.max(200)])],
      eyes : [this.eyes],
      hair : [this.hair],
      skin : [this.skin],
    });
  }
  addPost(post) {
    this.character ={
    name : post.name,
    classes : post.charClass,
    race : post.race,
    size : post.size,
    age : post.age,
    gender : post.gender,
    height : post.height,
    alignment : post.align,
    deity : post.god,
    weight : post.weight,
    eyes : post.eyes,
    heir : post.hair,
    skin : post.skin
    };
  }
}