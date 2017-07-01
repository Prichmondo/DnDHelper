import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { UsersService } from '../../services/users.service';
import { Broadcaster } from '../../services/broadcast';

@Component({
  selector: 'register',
  templateUrl: './app.register.html'
})
export class RegisterComponent implements OnInit {
  
  username: string = "";
  password: string = "";

  constructor(
      private authService: AuthenticationService,
      private router: Router,
      private broadcaster: Broadcaster,
      private usersService: UsersService
  ){}

  onLoginClick(){
      
      this.usersService
        .register({
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