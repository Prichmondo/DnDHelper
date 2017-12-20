import { Component, OnInit, OnDestroy, Input, Output, ViewChild, ViewChildren } from '@angular/core';
import { ModalService } from '../../services/modal.service'
import { IButton } from '../../models/button';

export interface IMobalButton extends IButton {}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() id: string;
  @Input() title: string;
  @Input() hideCloseBtn: boolean = false;
  @Input() hideXBtn: boolean = false;
  @Input() width: number = 600;
  @Input() buttons: IMobalButton[] = [];
  @Input() onClose: () => void = ()=>{ console.log("stocazzo") };

  visible: boolean = false;
  display: boolean = false;
  timeout;

  constructor(
    public modalService: ModalService
  ) {}

  getButtons():IMobalButton[] {
    
    var buttons:IMobalButton[] = [];

    buttons = this.buttons.map((button, i)=>{
      if(typeof button.className === "undefined" || button.className === null)
        button.className = "btn btn-default"
      return button;
    }) || [];

    if(!this.hideCloseBtn)
      buttons.push({text:"Close", className: "btn btn-default", click:this.toggleModal.bind(this)});

    return buttons;
  }

  ngOnInit() {
    this.modalService
      .add(this.id)
      .subscribe((visible)=>{
        this.setState(visible);
      });
  }

  setState(visible: boolean): void {
    if(this.visible !== visible){
      
      if(visible){
        this.display = true;

        setTimeout(()=>{
          this.visible = visible;
        }, 10);

      } else {
        this.visible = visible;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(()=>{
          this.display = false;
        }, 150);
      }

      
    }
  }

  ngOnDestroy() {
    this.modalService.remove(this.id);
  }

  toggleModal(){
    this.modalService.toggle(this.id);
    if(!this.modalService.isVisible(this.id))
      this.onClose();
  }

}
