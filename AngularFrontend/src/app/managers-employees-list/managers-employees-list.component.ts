import { Component, OnInit } from '@angular/core';
import { ManagerService } from './../models/manager/manager.service';
import { EmployeeService } from './../models/employee/employee.service';
import { Employee } from '../models/employee/employee';

@Component({
  selector: 'app-managers-employees-list',
  templateUrl: './managers-employees-list.component.html',
  styleUrls: ['./managers-employees-list.component.scss']
})
export class ManagersEmployeesListComponent implements OnInit {

  employees : Employee[];
  managerID : number;

  constructor(
    private employeeService : EmployeeService,
    private managerService : ManagerService
  ) {}

  ngOnInit() {
    this.employeeService.getEmployeesByManager(this.managerService.managerID).subscribe(
      response => { this.employees = response; console.log(response) },
      error => { alert("There was an error to show the 'employees-by-manager' list"); });

    this.managerID = this.managerService.managerID; //save the managerID of the manager that his employees are represented in the app
  }
  

  ngDoCheck() {
    if (this.managerID !== this.managerService.managerID)
      this.ngOnInit(); //if the managerID change, need to run the query again
  }

}