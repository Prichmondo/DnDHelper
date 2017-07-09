import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IClass, AttackBonusProgress,SaveThrowsProgress,ISaveThrows } from '../models/CharacterClass';
import { fighterMock } from '../mocks/mock-class';

@Component({

    selector:"show-class",
    templateUrl:"./app.showClasses.html",
    

})
export class ShowClasses{
    
    characterClasses: IClass[] =fighterMock

    constructor(
        private router:Router
    ){}

    
}