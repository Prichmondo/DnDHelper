import { Injectable } from '@angular/core';

@Injectable()

export class Utilities {
    //private numberInterval: any;
    //private randomInteger: any;

  public getRandomInteger (minVal, maxVal) {
    if (!minVal || !maxVal || Math.floor(minVal)>=Math.floor(maxVal)) {
        console.log("Incorrect parameters");
        return null;
    }
    var numberInterval = 0;
    var randomInteger = -1;

    minVal = Math.floor(minVal);
    maxVal = Math.floor(maxVal);

    numberInterval = maxVal - minVal +1;
    
    randomInteger = Math.floor((Math.random() * numberInterval));
    if (randomInteger === numberInterval) {
        this.getRandomInteger(minVal,maxVal);
    }
    else{
        return randomInteger + minVal;
    }
  }
  
    public confirmBox(textToDisplay): boolean{
        var answer = window.confirm(textToDisplay);
        return answer;
    }

    public Ucase(str): string{
        str = "" + str;
        str = str.toUpperCase();
        return str;
    }
}