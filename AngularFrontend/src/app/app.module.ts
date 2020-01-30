import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './models/employee/employee.service';
import { ManagerService } from './models/manager/manager.service';
import { ManagersEmployeesListComponent } from './managers-employees-list/managers-employees-list.component';
import { ManagersListComponent } from './managers-list/managers-list.component';
import { EmployeeFilterPipe } from './models/employee/employee-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EmployeeUpdateComponent,
    EmployeeAddComponent,
    ManagersEmployeesListComponent,
    ManagersListComponent,
    EmployeeFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService, ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }