import { Pipe, PipeTransform }  from '@angular/core';
//import { isNgTemplate } from '@angular/compiler';

export interface IPipe3FiltersText {
    inputArray: any[];
    prop1: string; filter1: string;
    prop2?: string; filter2?: string;
    prop3?: string; filter3?: string;
    useOrOperator?: boolean
}


@Pipe({
    name: 'pipe_text_filter',
    pure: false
})

export class Pipe3FiltersText implements PipeTransform {
    
    transform(inputObject: IPipe3FiltersText): any[] {
        console.log(inputObject);
        //console.log("pipe", inputObject.inputArray, inputObject.prop1, inputObject.filter1, inputObject.prop2, inputObject.filter2, inputObject.prop3, inputObject.filter3, inputObject.useOrOperator);
        //if (inputArray.length === 0 || !prop1 || !filter1) return inputArray;

        console.log("prop1", inputObject.inputArray);
        if (inputObject.useOrOperator) { 
            return inputObject.inputArray.filter(item => (
                item[inputObject.prop1].includes(inputObject.filter1)
                || (!inputObject.prop2 || item[inputObject.prop2] === inputObject.filter2)
                || (!inputObject.prop3 || item[inputObject.prop3] === inputObject.filter3)
            ));
        } else {
            return inputObject.inputArray.filter(item => (
                item[inputObject.prop1].includes(inputObject.filter1)
                && (!inputObject.prop2 || item[inputObject.prop2] === inputObject.filter2)
                && (!inputObject.prop3 || item[inputObject.prop3] === inputObject.filter3)
            ));
        }
    }
}
