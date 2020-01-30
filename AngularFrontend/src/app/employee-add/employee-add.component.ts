import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './../models/employee/employee.service';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})

export class EmployeeAddComponent implements OnInit {

  addForm: FormGroup; 
 
  constructor(private router: Router,
              private employeeService: EmployeeService,
              private formBuilder: FormBuilder) {}

    
    ngOnInit() {
      this.addForm = this.formBuilder.group({  
        Name: ['', Validators.required],  
        LastName: ['', Validators.required],  
        ID: ['', Validators.required],
        ManagerID: ['', Validators.required]
      });
    
    }

    onSubmit() : void {   
      this.setIDtoStringInForm();

      this.employeeService.addEmployee(this.addForm.value).subscribe(data => {
        this.router.navigate(['/']);}, error => { 
          alert("There was an error with one of the values. Please check the ID includes 9 digits, and that the manager with 'ManagerID' value does exists in the managers list."); });  
    }

     /*Set all the values in 'addForm', for the cause of changing 'ID' property back to string value*/
    setIDtoStringInForm() : void { 
      this.addForm.setValue({Name: this.addForm.value['Name'], LastName: this.addForm.value['LastName'],
      ID: this.addForm.value['ID'].toString(), ManagerID: this.addForm.value['ManagerID'] })
    }

}
