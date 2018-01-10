import { Injectable } from '@angular/core';

@Injectable()

export class Utilities {

  public getRandomInteger (minVal, maxVal): number {
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

    public trim(str): string{
        str = "" + str;
        str = str.trim();
        return str;
    }

    public trimUCase(str): string{
        str = "" + str;
        str = str.trim();
        str = str.toUpperCase();
        return str;
    }

    public formatNumberAsTextForceSign(inputNumber: number): string{
        if (typeof(inputNumber) !== "number") { return null };

        if (inputNumber < 0) {
            return "" + inputNumber;
        } else {
            return "+" + inputNumber;
        }
    }

    public setFocus(componentId: string, timeoutFix?: number) {
        if (!timeoutFix || timeoutFix < 0){timeoutFix = 200}
        var obj = document.getElementById(componentId);
        if (obj === null) {
            console.log("Set Focus function - unable to find element: " + componentId);
        } else {
            console.log("Set Focus function - object found: " + componentId);
            window.setTimeout(function (){
                //obj.blur();
                obj.focus();
            },timeoutFix);
        }
        return obj;
    }

    public sortByNKeys(...args: { key:string, inverse?: boolean }[]){

    }

    public sortByParams(...args: { prop: (e:any)=>any; inverse?: boolean }[]){
        return function (a, b) {
            for (let i = 0; i<args.length; i++){
                
                const arg = args[i];
                const aValue = arg.prop(a);
                const bValue = arg.prop(b);
                var elementA
                var elementB

                if (typeof aValue == "undefined" || typeof bValue == "undefined") {return 0}
                typeof aValue === "string" ? elementA = aValue.toUpperCase() : elementA = aValue;
                typeof bValue === "string" ? elementB = bValue.toUpperCase() : elementB = bValue;
                
                if (elementA < elementB) {
                    if (arg.inverse) {
                        return 1;
                    } else {
                        return -1;
                    }
                }

                if (elementA > elementB) {
                    if (arg.inverse) {
                        return -1;
                    } else {
                        return 1;
                    }
                }
            }
            return 0;
        }
    }

    // this.sortEvenBetterByParam(
    //     { prop: (user) => user.fullname.name, inverse: true}
    // )

    public sortByKey (key: string, inverse?: boolean, key2?: string, inverse2?: boolean, key3?: string, inverse3?: boolean){
        return function (a, b) {
            var elementA
            var elementB
    
            //first compare key
            if (typeof a[key] == "undefined" || typeof b[key] == "undefined") {return 0}
            typeof a[key] === "string" ? elementA = a[key].toUpperCase() : elementA = a[key];
            typeof b[key] === "string" ? elementB = b[key].toUpperCase() : elementB = b[key];
            if (elementA < elementB) {
                if (inverse) {
                    return 1;
                } else {
                    return -1;
                }
            }
            if (elementA > elementB) {
                if (inverse) {
                    return -1;
                } else {
                    return 1;
                }
            }
            if (!key2){return 0};

            //second compare key
            if (typeof a[key2] == "undefined" || typeof b[key2] == "undefined") {return 0}
            typeof a[key2] === "string" ? elementA = a[key2].toUpperCase() : elementA = a[key2];
            typeof b[key2] === "string" ? elementB = b[key2].toUpperCase() : elementB = b[key2];
            if (elementA < elementB) {
                if (inverse2) {
                    return 1;
                } else {
                    return -1;
                }
            }
            if (elementA > elementB) {
                if (inverse2) {
                    return -1;
                } else {
                    return 1;
                }
            }
            if (!key3){return 0};

            //third compare key
            if (typeof a[key3] == "undefined" || typeof b[key3] == "undefined") {return 0}
            typeof a[key3] === "string" ? elementA = a[key3].toUpperCase() : elementA = a[key3];
            typeof b[key3] === "string" ? elementB = b[key3].toUpperCase() : elementB = b[key3];
            if (elementA < elementB) {
                if (inverse3) {
                    return 1;
                } else {
                    return -1;
                }
            }
            if (elementA > elementB) {
                if (inverse3) {
                    return -1;
                } else {
                    return 1;
                }
            }
            return 0;

        }
    }

}