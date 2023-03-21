import { Component } from '@angular/core';
import { Employee, Employees } from '../model/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: Employee[] = [];
  employee !: Employee;

  ngOnInit(): void {
  }

  loadEmployeeList(): void {
    this.getEmployees();
  }
  private getEmployees(){
    this.employees = Employees
  }

  employeeDetails(data: Employee){
    this.employee = data;
    console.log(this.employee)
  }
}
