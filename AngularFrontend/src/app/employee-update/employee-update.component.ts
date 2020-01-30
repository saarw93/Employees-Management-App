import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './../models/employee/employee.service';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent implements OnInit {

  addForm: FormGroup; 

  constructor(private router: Router,
              private employeeService: EmployeeService,
              private formBuilder: FormBuilder) {}

   
    ngOnInit() {
      this.addForm = this.formBuilder.group({  
        EmployeeID: [],  
        Name: ['', Validators.required],  
        LastName: ['', Validators.required],  
        ID: ['', Validators.required],
        ManagerID: ['', Validators.required]  
      });  
    

      let employeeID = localStorage.getItem('editEmployeeID');  
      if (+employeeID > 0) {   //the employee exists in database
          this.employeeService.getEmployee(+employeeID).subscribe(data => {  
          this.addForm.patchValue(data);  //write the values of the employee's properties to the edit form
        })   
      }  
    }

    onUpdate() { 
      this.setIDtoStringInForm();

      this.employeeService.updateEmployee(this.addForm.value, this.employeeService.employee.EmployeeID).subscribe((data) => {  
        this.router.navigate(['/']);}, error => { 
         alert("There was an error with one of the values. Please check the ID includes 9 digits, and that the manager with 'ManagerID' value does exists in the managers list."); });  
    }

    /* Set all the values in 'addForm', for the cause of changing 'ID' property back to string value */
    setIDtoStringInForm() : void {
      this.addForm.setValue({EmployeeID: this.employeeService.employee.EmployeeID, Name: this.addForm.value['Name'],
        LastName: this.addForm.value['LastName'], ID: this.addForm.value['ID'].toString(),
        ManagerID: this.addForm.value['ManagerID']})
    }

}
