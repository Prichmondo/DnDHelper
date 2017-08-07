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

  formatDate(stringDate: string): string {
    var date = new Date(stringDate);
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  getDuration(){
    var startDate = new Date(this.campaign.startDate);
    var currentDate = new Date(this.campaign.currentDate);
    var timeDiff = Math.abs(startDate.getTime() - currentDate.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
  }

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