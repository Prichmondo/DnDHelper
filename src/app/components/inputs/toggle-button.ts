import { Component,
         Input,
         Output,
         OnInit }                   from '@angular/core';


@Component({
  selector: 'toggle-button',
  templateUrl: './toggle-button.html',
  styleUrls: ['./toggle-button.css']
})

export class ToggleButtonComponent {
    @Input() options: string[] = [];
    @Input() value: string; 
        
    constructor(
      
    ){

    }

    ngOnInit(){
        console.log(this.value);
    }

    onClick(value :string){
        this.value = value;
    }
}