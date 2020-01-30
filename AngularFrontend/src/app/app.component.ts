import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle : string;

  constructor(){
    this.appTitle = 'Employees-Management Application';
  }

}