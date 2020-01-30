import { Employee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl : string;
  public employee : Employee;

  constructor( private httpClient : HttpClient ) { 
    this.employeesUrl = 'http://localhost:58369/api/Employee';  //the URL of the backend Employees' APIs 
  }

  public getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.employeesUrl);
  }

  public getEmployeesByManager(managerId : number): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.employeesUrl}/manager/${managerId}`);
  }

  public addEmployee(employee : Employee) {
    return this.httpClient.post<Employee>(this.employeesUrl, employee, 
      { headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      });
  }

  public deleteEmployee(employeeId : number) {
    return this.httpClient.delete<void>(`${this.employeesUrl}/${employeeId}`);
  }

  public updateEmployee(employee : Employee, employeeId : number) {
    return this.httpClient.put<void>(`${this.employeesUrl}/${employeeId}`, employee, 
    { headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  public getEmployee(employeeId: number): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.employeesUrl}/${employeeId}`);
  }

}