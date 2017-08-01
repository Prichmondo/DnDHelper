import { Component,
         Input,
         Output,
         EventEmitter,
         OnInit }                   from '@angular/core';


@Component({
  selector: 'toggle-button',
  templateUrl: './toggle-button.html',
  styleUrls: ['./toggle-button.css']
})

export class ToggleButtonComponent {
    @Input() options: string[] = [];
    @Input() value: string;
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
        
    constructor(){}

    onClick(value :string){
        this.value = value;
        this.valueChange.emit(this.value);
    }
}