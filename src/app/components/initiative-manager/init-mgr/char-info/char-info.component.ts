import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { INpc } from '../../../../models/inpc';

import { LocalStorageManagerService } from '../../../../services/local-storage-manager.service';

@Component({
  selector: 'app-char-info',
  templateUrl: './char-info.component.html',
  styleUrls: ['./char-info.component.scss']
})
export class CharInfoComponent implements OnInit {
  @Output() onMove = new EventEmitter<INpc>();
  @Output() onEdit = new EventEmitter<INpc>();
  @Output() onRemove = new EventEmitter<INpc>();
  @Input()characterInfo: INpc;
  @Input()i: number;

    constructor() { }

  ngOnInit() {

  }
  onEditClick() {
    this.onEdit.emit(this.characterInfo);
  }

  onMoveClick() {
    this.onMove.emit(this.characterInfo);
  }

  onRemoveClick() {
    this.onRemove.emit(this.characterInfo);
  }

  onSelectCharType(): object {
    switch (this.characterInfo.charOfType) {
      case 'Enemy':
        this.characterInfo.charImagepath = '../assets/Images/icons8-gremlin-50.png';
        return {'border': '6px solid #d9534f'};
      case 'Neutral':
        this.characterInfo.charImagepath = '../assets/Images/neutral.png';
        return {'border': '6px solid #f9f9f9'};
      default: 
        this.characterInfo.charImagepath = '../assets/Images/Riccardo.jpg';
        return {'border': '6px solid #5cb85c'};
    }
  }

}
