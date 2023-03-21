import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  @Input() employee!: Employee;

  ngOnInit(): void {
  }
}
