import { Manager } from './manager';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private managersUrl : string;
  public managerID : number; //variable to save who is the manager that his employees needs to be displayed

  constructor( private httpClient : HttpClient ) { 
    this.managersUrl = 'http://localhost:58369/api/Manager'; //the URL of the backend Managers' APIs
  }

  public getManagers(): Observable<Manager[]> {
    return this.httpClient.get<Manager[]>(this.managersUrl);
  }

  /* Ready APIs for expanding the application with more operations on the managers */
  /**public saveManager(manager : Manager) {
    return this.httpClient.post<Manager>(this.managersUrl, manager);
  }

  public deleteManager(managerId : number) {
    return this.httpClient.delete<void>(`${this.managersUrl}/${managerId}`);
  }

  public updateManager(manager : Manager) {
    return this.httpClient.put<void>(this.managersUrl, manager, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }**/

}