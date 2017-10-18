import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Utilities } from '../../utilities/app.utilities'

@Component({
  selector: 'input-number',
  templateUrl: './input-number.html',
  styleUrls: ['./input-number.css'],
})

export class InputNumberComponent {

    @Input() description: string = "";
    @Input() value: number = 0;
    @Input() setMin: number = 0;
    @Input() setMax: number = 100;
    @Input() greenCondition: number = 9999;

    @Output() valueChange: EventEmitter<Number>;

    mousePressed: boolean = false;
    
    constructor () {
        this.valueChange = new EventEmitter<Number>();
    }

    ngOnInit() {
    }
    
    spinnerIncrease(){
        this.mousePressed = true;
        this.spinnerChange(1);
    }

    private spinnerIncreaseMouseUp(){
        this.mousePressed = false;
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
}
