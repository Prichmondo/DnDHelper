import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { CampaignsService } from '../../services/campaigns.service';
import { Campaign } from '../../models/Campaign';

@Component({
  selector: 'campaigns',
  templateUrl: './app.campaigns.html'
})
export class CampaignsComponent implements OnInit {
  
  campaigns: Campaign[] = [];

  constructor(
      private router: Router,
      private authService: AuthenticationService,
      private campaignsService: CampaignsService
  ){}

  onSelect(campaign: Campaign){
    this.router.navigate(["/campaign", campaign._id]);
  }

  ngOnInit(){
    this.campaignsService
        .get()
        .subscribe((resp)=>{
            this.campaigns = resp;
            console.log(resp);
        });
  }
}