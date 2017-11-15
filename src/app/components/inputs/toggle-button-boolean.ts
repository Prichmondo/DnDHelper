import { Component,
         Input,
         Output,
         EventEmitter,
         OnInit }                   from '@angular/core';


@Component({
  selector: 'toggle-button-boolean',
  templateUrl: './toggle-button-boolean.html',
  styleUrls: ['./toggle-button-boolean.css']
})

export class ToggleButtonComponentB {
    @Input() textToDisplay: string = "Test";
    @Input() id: any = 0;
    @Input() status: boolean;
    
    @Output() valueChange: EventEmitter<object> = new EventEmitter<object>();
    //@Output() valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    
    constructor(){
    }

    onClick(value :boolean){
        this.status = !this.status;
        console.log("toggle onclick", this.id, this.status);
        this.valueChange.emit({id: this.id, value: this.status});
        //this.valueChange.emit(this.status);
    }

    ngOnInit(){
        
    }
}