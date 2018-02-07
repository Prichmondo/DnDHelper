import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  detailsForm: FormGroup;
  post: any;
  name = '';
  charClass = '';
  race = '';
  size: number;
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
      name: [this.name , Validators.compose([Validators.required, Validators.minLength(2)])],
      charClass: [this.charClass, Validators.required],
      race: [this.race, Validators.required],
      size: [null, Validators.required],
      age:[null, Validators.required],
      gender: [this.gender, Validators.required],
      heigth: [this.heigth, Validators.required],
      align : [this.align, Validators.required],
      god  : [this.god, Validators.required],
      weight: [null, Validators.required],
      eyes : [this.eyes, Validators.required],
      hair : [this.hair, Validators.required],
      skin : [this.skin, Validators.required],
    });
  }
}
