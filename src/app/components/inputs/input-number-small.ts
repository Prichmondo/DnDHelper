import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Utilities } from '../../utilities/app.utilities'

@Component({
  selector: 'input-number-small',
  templateUrl: './input-number-small.html',
  styleUrls: ['./input-number-small.scss'],
})

export class InputNumberSmallComponent {

    @Input() description: string = "";
    @Input() value: number = 0;
    @Input() setMin: number = 0;
    @Input() setMax: number = 100;
    @Input() greenCondition: number = 9999;
    @Input() isReadOnly: boolean = false;

    @Output() valueChange: EventEmitter<Number>;
  
    constructor () {
        this.valueChange = new EventEmitter<Number>();
    }

    ngOnInit() {
    }
    
    spinnerIncrease(){
        this.spinnerChange(1);
    }

    private spinnerDecrease() {
        this.spinnerChange(-1);
    }

    private spinnerChange(interval){
        if ((interval > 0 && this.value < this.setMax) || (interval < 0 && this.value > this.setMin)){
            this.value = this.value + interval;
            this.valueChange.emit(this.value);
        }
    }

    doValidate(){
        if (this.value < this.setMin){
            this.value = this.setMin;
            this.valueChange.emit(this.value);
        } else {
            if (this.value > this.setMax){
                this.value = this.setMax;
                this.valueChange.emit(this.value);
            }
        }
    }
}
