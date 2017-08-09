import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CampaignsService } from '../../services/campaigns.service';
import { Campaign, IAddCampaignRequest } from '../../models/Campaign';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'add-campaigns',
  templateUrl: './app.addCampaign.html'
})
export class AddCampaignComponent implements OnInit {
  
  campaign: IAddCampaignRequest;

  constructor(
      private campaignsService: CampaignsService,
      private activatedRoute: ActivatedRoute,
      private router: Router
  ){}

  onSubmit(){
    this.campaignsService
      .post(this.campaign)
      .subscribe((campaign: Campaign)=>{
        this.router.navigate(["/campaigns"])
      })
  }

  ngOnInit(){
       this.campaign = {
         title: "", 
         setting: "", 
         startDate: Date.now().toString(), 
         currentDate: Date.now().toString()
       }     
  }
}