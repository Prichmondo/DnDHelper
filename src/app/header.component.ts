import { Component, OnInit }  from '@angular/core';
import { AppRoutingModule }   from './app.routing.module';

@Component({
  selector: 'site-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  title = "Helper v1.0";
  isLoggedIn: boolean = false;
  routes = AppRoutingModule.routes;
  
  ngOnInit(){
    console.log(AppRoutingModule.routes);
  }
}