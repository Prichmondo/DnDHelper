import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { Broadcaster } from '../../services/broadcast';

@Component({
  selector: 'login',
  templateUrl: './app.login.html',
  styleUrls: ['./app.login.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  
  username: string = "";
  password: string = "";

  constructor(
      private authService: AuthenticationService,
      private router: Router,
      private broadcaster: Broadcaster
  ){}

  onLoginClick(){
      
      this.authService
        .login({
            username: this.username,
            password: this.password
        })
        .subscribe((response)=>{
            this.broadcaster.broadcast('login', true);
            this.router.navigate(["/"]);
        });
  }

  ngOnInit(){

  }
}