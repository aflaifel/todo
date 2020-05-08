import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedAuthenticationService: HardcodedAuthenticationService) { 

  }

  ngOnInit() {
    console.log('logout');
    this.hardcodedAuthenticationService.logout();
  }

}
