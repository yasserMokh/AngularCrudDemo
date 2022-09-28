import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/models/interfaces/iemployee.interface';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

  employees:IEmployee[] | null;
  
  constructor(private _employeeService:EmployeeService) { 
    this.employees = null;
  }

  ngOnInit(): void {
    this.employees = this._employeeService.getAllEmployees();
  }

}
