import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ModalService {

  id: string = null;
  modals: {[key:string]:BehaviorSubject<boolean>} = {};
  
  constructor() { }

  exist(id:string): boolean {
    return typeof this.modals[id] !== "undefined";
  }

  add(id:string): BehaviorSubject<boolean> {
    
    if(!this.exist(id))
        this.modals[id] = new BehaviorSubject(false);
    
    return this.modals[id];

  }

  remove(id:string): void {
    if(this.exist(id))
        delete this.modals[id];
  }

  open(id:string): void {
    if(this.exist(id))
      this.modals[id].next(true);
  }

  close(id:string): void {
    if(this.exist(id))
      this.modals[id].next(false);
  }

  isVisible(id:string): boolean {
    return (this.exist(id) && this.modals[id].getValue());
  }

}
