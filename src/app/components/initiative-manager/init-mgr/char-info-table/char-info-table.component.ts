import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { INpc } from '../../../../models/inpc';

@Component({
  selector: 'app-char-info-table',
  templateUrl: './char-info-table.component.html',
  styleUrls: ['./char-info-table.component.scss']
})
export class CharInfoTableComponent implements OnInit {

  @Output() onMove = new EventEmitter<INpc>();
  @Output() onEdit = new EventEmitter<INpc>();
  @Output() onRemove = new EventEmitter<INpc>();
  @Input() characterList: INpc[];
  @Input() playTurn: boolean;
  mouseover=false;
  moved = "Move";
  constructor() { }

  ngOnInit() {
  }

  onMoveClick(character) {
    if (this.moved==="Move"){
      this.moved = "Move Here";
    }else {
      this.moved = "Move";
    }
    this.onMove.emit(character);
  }
  onEditClick(character) {
    this.onEdit.emit(character);
  }
  onRemoveClick(character) {
    this.onRemove.emit(character);
  }
}
