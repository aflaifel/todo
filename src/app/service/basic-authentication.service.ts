import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';


export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeAuthenticationService(username, password){
    debugger
    let basicAuthHeaderString = 'Basic '+  window.btoa(username +':'+ password);
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    }
    )
     
     //here how to add headers it should be in new object how i get header ? i create new method to generate it 
    return this.http.get<AuthenticationBean>(
      `${API_URL}/basicauth`
      ,{headers : header}).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER , username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return data;
          },
          error => {
            console.log("error in BasicAuth service " );
          }
        )
      );
  }


  executeJWTAuthenticationService(username, password) {
     //sending post call to create token and save it in token below
     debugger
    return this.http.post<any>(
      `${API_URL}/authenticate`,{
        username,
        password
      }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER , username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          },
          error => {
            console.log("error in BasicAuth service " );
          }
        )
      );
  }


  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
    return sessionStorage.getItem('token')
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser')
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user=== null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')
  }
}

export class AuthenticationBean{
 
  constructor(public message: string){

  }
}
