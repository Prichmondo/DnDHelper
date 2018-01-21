import { Component,
         Input,
         Output,
         EventEmitter,
         OnInit }                   from '@angular/core';


@Component({
  selector: 'toggle-button',
  templateUrl: './toggle-button.html',
  styleUrls: ['./toggle-button.scss']
})

export class ToggleButtonComponent {
    @Input() options: string[] = [];
    @Input() value: string;
    @Input() fixedButtonWidth: number = -1;
    @Input() fixedComponentWidth: number = -1;
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
        
    constructor(){}

    onClick(value :string){
        this.value = value;
        this.valueChange.emit(this.value);
    }

    ngOnInit(){
        if (this.fixedComponentWidth > 0 && this.options.length > 0){
            this.fixedButtonWidth = Math.round(this.fixedComponentWidth / this.options.length);
        }
    }
}