import { Manager } from './../models/manager/manager';
import { Component, OnInit } from '@angular/core';
import { ManagerService } from './../models/manager/manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-managers-list',
  templateUrl: './managers-list.component.html',
  styleUrls: ['./managers-list.component.scss']
})
export class ManagersListComponent implements OnInit {

  managers : Manager[];

  constructor(
    private managerService : ManagerService,
    private router: Router
  ) {}

  
  ngOnInit() {
    this.managerService.getManagers().subscribe(
      response => { this.managers = response; console.log(response) },
      error => { alert("There was an error to show the 'employees-by-manager' list"); });
  }


  getManagerID(managerID : number) : void {
    console.log("managerID in manager.service equals :" + managerID);
    this.managerService.managerID = managerID;
    this.router.navigate(['manager/',  managerID]);
  }

}
