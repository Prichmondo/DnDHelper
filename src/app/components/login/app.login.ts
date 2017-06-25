import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './app.login.html',
  //styleUrls: ['./app.login'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  
  username: string = "";
  password: string = "";

  constructor(
      private authService: AuthenticationService
  ){}

  onLoginClick(){
      this.authService
        .login({
            username: this.username,
            password: this.password
        })
        .subscribe((response)=>{
            console.log(response);
        });
  }

  ngOnInit(){
    console.log(this.authService.currentUser());
  }
}