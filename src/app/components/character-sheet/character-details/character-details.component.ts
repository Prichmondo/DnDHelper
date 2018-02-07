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
  constructor(private fb: FormBuilder) {  this.charDetailsForm() }

  ngOnInit() {
  }
  charDetailsForm() {
    this.detailsForm = this.fb.group({
      name: [this.name , Validators.compose([Validators.required, Validators.minLength(2)])],
      bonus: ['', Validators.required],
      initiative: [null, Validators.required]
    });
  }
}
