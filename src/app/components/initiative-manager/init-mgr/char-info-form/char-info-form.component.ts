import { Component, OnInit, DoCheck, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { INpc } from '../../../../models/inpc';

import { LocalStorageManagerService } from '../../../../services/local-storage-manager.service';
@Component({
  selector: 'app-char-info-form',
  templateUrl: './char-info-form.component.html',
  styleUrls: ['./char-info-form.component.css']
})
export class CharInfoFormComponent implements OnInit, DoCheck, OnChanges {

  @Input()characterInfo: INpc;
  @Output()statusForm = new EventEmitter<boolean>();
  @Output()characterInfoOut = new EventEmitter<INpc>();
  charInfoForm: FormGroup;
  post: any;
  name = '';
  bonus: number;
  initiative: number;

  constructor(private fb: FormBuilder, private localStorageManager: LocalStorageManagerService) {
    this.createForm();
  }

  createForm() {
    this.charInfoForm = this.fb.group({
      name: [this.name , Validators.compose([Validators.required, Validators.minLength(2)])],
      bonus: [this.bonus, Validators.required],
      initiative: [null, Validators.required]
    });
  }

  ngDoCheck() {

  }

  ngOnChanges() {
    this.charInfoForm.reset({
      name: this.characterInfo.charName,
      bonus: this.characterInfo.charBaseInit,
      initiative: this.characterInfo.initiative
    });
  }

  ngOnInit() {
  }

  getStatusForm() {
    this.statusForm.emit();
  }

  addPost(post) {
    this.characterInfo.charName = post.name;
    this.characterInfo.charBaseInit = post.bonus;
    this.characterInfo.initiative = post.initiative;
    this.statusForm.emit(false);
    this.characterInfoOut.emit();
  }

  onSelectCharType(): object {
    switch (this.characterInfo.charOfType) {
      case 'Character':
        this.characterInfo.charImagepath = '../assets/Images/Riccardo.jpg';
        return {'border': '6px solid #5cb85c'};
      case 'Enemy':
        this.characterInfo.charImagepath = '../assets/Images/icons8-gremlin-50.png';
        return {'border': '6px solid #d9534f'};
      case 'Neutral':
        this.characterInfo.charImagepath = '../assets/Images/neutral.png';
        return {'border': '6px solid #f9f9f9'};
    }
  }

}
