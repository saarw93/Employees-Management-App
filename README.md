# Employees-Management-App
This is a simple Employees-Management ASP.Net core 3 and Angular 8 application, and it has MSSQL database

This is a ASP.Net Core 3 Application for managing employees by their managers. It has a frontend made with Angular 8.

### The application exposes the following APIs:
* List of employees (EmployeeID, Name, LastName, ManagerID)
* Edit/Update employee's details
* Add new employee
* Delete employee from the list
* List of managers
* List of employees that have the same manager
(There are also add, delete and update for managers, but not in the angular app for now)

 
Data is persisted on MSSQL Database in a local way. Therefore, for using it you should open Database in MSSQL on your machine,
and use the employees-management-dump.sql file for creating the tables and populate them with objects.


The ASP.Net core application runs at: http://localhost:58369

To view the Angular app, point your browser to http://localhost:4200

*Please note that for running the angular application you must first run the ASP.Net Core application.



## Installing:

### Running the App on your local machine:

For running this application on your machine, run the following CLI commands:

$ git clone https://github.com/saarw93/Employees-Management-App.git

navigate to the folder where you made the clone above.

For running the ASP.Net Core app, navigate to "EmployeesManagementAPI" folder and run the following:\n
$ dotnet build  \n
$ dotnet run --urls="http://localhost:58369" 

For running the Angular app, navigate to "AngularFrontend" folder and run the following: \n
$ ng serve
