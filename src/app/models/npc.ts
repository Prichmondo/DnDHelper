export class Npc {
    charName: string;
    charImagepath: string;
    charBaseInit: number;
    charOfType: string;
    charQuantity: number;
    initiative: number;
    id: number;
    selected: boolean;
    isTurn:boolean;

    constructor(name,  charType, imagePath, baseInit, charQuantity, selected, initiative?, id?, isTurn?) {
     this.charName = name;
     this.charOfType = charType;
     this.charImagepath = imagePath;
     this.charBaseInit = baseInit;
     this.charQuantity = charQuantity;
     this.selected = false;
     this.initiative = initiative;
     this.id = id;
     this.isTurn = false; 
     }
}
