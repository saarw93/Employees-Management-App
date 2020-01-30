import { Employee } from './employee';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name : 'employeesFilter'
})
export class EmployeeFilterPipe implements PipeTransform {
    transform(employees : Employee[],
              searchKeyEmployeeID? : number,
              searchKeyName? : string,
              searchKeyLastName? : string,
              searchKeyID? : string,
              searchKeyManagerID? : number
            ) : Employee[] {

        let employeesList : Employee[];
        if (employees) 
        {
            employeesList = employees;
        
            if (searchKeyEmployeeID)
                employeesList = employeesList.filter(employee => employee.EmployeeID === searchKeyEmployeeID ) //returns employees list that fits the 'searchKeyEmployeeID'

            if (searchKeyName)
                employeesList = employeesList.filter(employee => employee.Name.toLowerCase().indexOf(searchKeyName.toLowerCase()) !== -1) //returns employees list that fits the 'searchKeyName'
        
            if (searchKeyLastName)
                employeesList = employeesList.filter(employee => employee.LastName.toLowerCase().indexOf(searchKeyLastName.toLowerCase()) !== -1) //returns employees list that fits the 'searchKeyLastName'
        
            if (searchKeyID)
                employeesList = employeesList.filter(employee => employee.ID.indexOf(searchKeyID) !== -1) //returns employees list that fits the 'searchKeyID'
    
            if (searchKeyManagerID)
                employeesList = employeesList.filter(employee => employee.ManagerID === searchKeyManagerID) //returns employees list that fits the 'searchKeyManagerID'
    
            return employeesList;
        }
        return employees;
    }
}