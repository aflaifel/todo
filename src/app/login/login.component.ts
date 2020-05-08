import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HardcodedAuthenticationService} from './../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'abdallah'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Router
  //Angular.giveMeRouter
  //Dependency Injection
  constructor(private router: Router
    , private hardcodedAuthenticationService: HardcodedAuthenticationService
    ,private basicAuthenticationService: BasicAuthenticationService ) { }

  ngOnInit() {
  }

  handleLlogin() {
    //if(this.username==="abdallah" && this.password==="dummy"){
      if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      //Redirect to Welcome page
      this.router.navigate(['welcome',this.username])
      this.invalidLogin=false
    }
    else{
      this.invalidLogin=true
      }
    console.log(this.username);
  }

  handleBasicAuthlogin() {
      this.basicAuthenticationService.executeAuthenticationService(this.username,this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome',this.username])
          this.invalidLogin=false
          console.log("after subscribing");
        },
        error => {
          console.log("Error: "+ error);
          this.invalidLogin=true
        } 
      )
    }

    handleJWTAuthlogin() {
      this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password)
      .subscribe(
        data => {
          debugger
          console.log(data)
          this.router.navigate(['welcome',this.username])
          this.invalidLogin=false
          console.log("after subscribing");
        },
        error => {
          console.log("Error: "+ error);
          this.invalidLogin=true
        } 
      )
    }
}
