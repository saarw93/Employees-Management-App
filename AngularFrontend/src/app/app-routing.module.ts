import { ManagersEmployeesListComponent } from './managers-employees-list/managers-employees-list.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: EmployeesListComponent },
  { path: 'manager/:managerID', component: ManagersEmployeesListComponent },
  { path: 'addemployee', component: EmployeeAddComponent },
  { path: 'employee/:emplyeeID', component: EmployeeUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
