import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute, Route } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'welcome massge '
  welcomeMessageFromService = ''
  errorMessage = 'error'
  error = false;
  name = ''

  //ActivatedRoute
  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {

  }

  ngOnInit() {
    // console.log(this.message);
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
    this.message += name
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter() {
    this.service.executeHelloWorldBeanServiceWithParam(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => {
        error = true;
        this.handleErrorResponse(error)}
    );
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message
  }


  handleErrorResponse(error) {
    error = true;
     console.log(error.error.message);
     console.log(error.error);
    this.errorMessage = error.error.message;
  }
}
