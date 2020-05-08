import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password){
    // console.log('before '+this.isUserLoggedIn());
    if(username==="abdallah" && password==="dummy"){
      sessionStorage.setItem('authenticatedUser', username);
      // console.log('After '+this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user=== null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
