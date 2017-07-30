import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CampaignsService } from '../../services/campaigns.service';
import { Campaign } from '../../models/Campaign';

@Component({
  selector: 'campaigns',
  templateUrl: './app.campaigns.html',
  providers: [AuthenticationService, CampaignsService]
})
export class CampaignsComponent implements OnInit {
  
  campaigns: Campaign[] = [];

  constructor(
      private authService: AuthenticationService,
      private campaignsService: CampaignsService
  ){}

  ngOnInit(){
    this.campaignsService
        .get()
        .subscribe((resp)=>{
            this.campaigns = resp;
            console.log(resp);
        });
  }
}