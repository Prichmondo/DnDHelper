import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CampainsService } from '../../services/campains.service';

@Component({
  selector: 'campains',
  templateUrl: './app.campains.html',
  providers: [AuthenticationService, CampainsService]
})
export class CampainsComponent implements OnInit {
  
  constructor(
      private authService: AuthenticationService,
      private campainsService: CampainsService
  ){}

  ngOnInit(){
    this.campainsService
        .get()
        .subscribe((resp)=>{
            console.log(resp);
        });
  }
}