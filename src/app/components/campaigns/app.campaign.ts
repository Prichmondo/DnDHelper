import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { CampaignsService } from '../../services/campaigns.service';
import { Campaign, Setting, Satellite } from '../../models/Campaign';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'campaigns',
  templateUrl: './app.campaign.html',
  styleUrls: ['app.campaign.scss']
})
export class CampaignComponent implements OnInit {
  
  campaign: Campaign;

  constructor(
      private campaignsService: CampaignsService,
      private activatedRoute: ActivatedRoute
  ){}

  formatDate(stringDate: string): string {
    var date = new Date(stringDate);
    var monthNames = this.campaign.setting.months;

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

  getMoonStyle(moon: Satellite, index: number){

    var size = 70 - index*10;
    var position = -90;
    
    var campaignStartDate = new Date(this.campaign.startDate);
    var endDate = new Date(this.campaign.currentDate);    
    var startDate = new Date(campaignStartDate.getFullYear(), 0, 0);
    var day = this.getDaysCount(startDate, endDate);

    var currentRevolutionState = day/moon.revolution;
    var revolution = 360 * currentRevolutionState;

    position += revolution;
    
    return {
      'background-color': moon.color,
      'width': `${size}px`,
      'height': `${size}px`,
      'transform': `rotate(-${position}deg) translate(100px) rotate(${position}deg)`,
      'margin-left': `-${size/2}px`,
      'margin-top': `-${size/2}px`,
      'box-shadow': `0px 0px 1px 1px ${moon.color}`
    }
  }

  getPahseStyle(moon: Satellite, phase: number){
    
    var moonPhase = this.getMoonPhase(moon);
    if(moonPhase === phase) return { opacity: 0.8 }

    return { opacity: 0 }
  }

  getMoonPhase(moon: Satellite){

    var endDate = new Date(this.campaign.currentDate);    
    var startDate = new Date(endDate.getFullYear(), 0, 0);
    var day = this.getDaysCount(startDate, endDate);

    var currentRevolutionState = day/moon.revolution - Math.floor(day/moon.revolution);
           
    return Math.floor(8*currentRevolutionState);
  }

  getDaysCount(startDtae: Date, endDate: Date): number{

    var startDate = new Date(this.campaign.startDate);
    var start = new Date(startDate.getFullYear(), 0, 0);
    var diff = Number(endDate) - Number(start);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);

    return day;
  }

  click(){
    var old = new Date(this.campaign.currentDate);
    old.setMonth(old.getMonth()+1)
    var newDate = old.toISOString();

    this.campaign.currentDate = newDate;
  }

  ngOnInit(){
       
    this.activatedRoute
        .params
        .subscribe(params=>{
          this.getCampaign(params.id);
        });
            
  }
}