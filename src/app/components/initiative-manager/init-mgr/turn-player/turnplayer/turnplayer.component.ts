import { Component, OnInit, Input } from '@angular/core';
import { INpc } from 'app/models/inpc';

@Component({
  selector: 'app-turnplayer',
  templateUrl: './turnplayer.component.html',
  styleUrls: ['./turnplayer.component.scss']
})
export class TurnplayerComponent implements OnInit {

  @Input() characterList: INpc[];
  @Input() character: INpc;

  constructor() { }

  ngOnInit() {
  }
  
}
