import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class helloWorldBean{
  constructor(public message: string){ }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<helloWorldBean>(`http://localhost:8080/hello-world-bean`);
    // console.log('helloWorld bean service')
  }

  executeHelloWorldBeanServiceWithParam(name){
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let header = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // }
    // )
     console.log('helloWorld with param '+ name)
     //here how to add headers it should be in new object how i get header ? i create new method to generate it 
    return this.http.get<helloWorldBean>(`http://localhost:8080/hello-world-path-variable/${name}`
    // ,{headers : header}
    );
    
  }

  // createBasicAuthenticationHttpHeader(){
  //   let username = 'user'
  //   let password = 'password'
  //   let basicAuthHeaderString = 'Basic '+  window.btoa(username +':'+ password);
  //   return basicAuthHeaderString;
  // }
}
