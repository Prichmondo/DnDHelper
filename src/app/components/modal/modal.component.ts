import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Input() id: string;
  visible: boolean = false;
  display: boolean = false;
  timeout;

  constructor(
    public modalService: ModalService
  ) {}

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
    if(this.visible)
      this.modalService.close(this.id);
    else
      this.modalService.open(this.id);
  }

}
