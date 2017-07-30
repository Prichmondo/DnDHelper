import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CampaignsService } from '../../services/campaigns.service';
import { Campaign } from '../../models/Campaign';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'campaigns',
  templateUrl: './app.campaign.html',
  providers: [AuthenticationService, CampaignsService]
})
export class CampaignComponent implements OnInit {
  
  campaign: Campaign;

  constructor(
      private campaignsService: CampaignsService,
      private activatedRoute: ActivatedRoute
  ){}

  getCampaign(id){
    this.campaignsService
        .getById(id)
        .subscribe((resp)=>{
            this.campaign = resp;
            console.log(resp);
        });
  }

  ngOnInit(){
       
    this.activatedRoute
        .params
        .subscribe(params=>{
          this.getCampaign(params.id);
        });
            
  }
}