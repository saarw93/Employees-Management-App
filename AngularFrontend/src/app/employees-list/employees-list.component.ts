import { Employee } from './../models/employee/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../models/employee/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  employees : Employee[];
  searchKeyEmployeeID : string;
  searchKeyName : string;
  searchKeyLastName : string;
  searchKeyID : string;
  searchKeyManagerID : string;

  constructor(
    private employeeService : EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      response => { this.employees = response; console.log(response); },
      error => { alert("There was a problem to get the employees list"); });
  }


  /* Remove the former saved employee from local storage, and set the new employee to edit in local storage.
     This is done for retrieving the data in the Edit Employee Form */
  editEmployee(employee: Employee): void {
    localStorage.removeItem('editEmployeeID');  
    localStorage.setItem('editEmployeeID', employee.EmployeeID.toString());
    this.employeeService.employee = employee;
    this.router.navigate(['employee/', employee.EmployeeID]);  
  }


  /* Delete the selected employee from the database */
  deleteEmployee(employeeID : number): void {
    let ID = employeeID;
    this.employeeService.deleteEmployee(employeeID).subscribe(data => {
      alert("Employee with EmployeeID = " + ID + " has been deleted successfully");  
      location.reload(); }, error => { alert("There was an error to delete the selected employee"); });  
  }

}