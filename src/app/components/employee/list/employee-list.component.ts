import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { IEmployee } from 'src/app/models/interfaces/iemployee.interface';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

  employees: IEmployee[] | null = null;
  currentIndex: number = 0;
  employeeToDisplay: IEmployee = new Employee();
  clickedEmployee: IEmployee | null = null;

  constructor(private _employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employees = this._employeeService.getAllEmployees();
    if (this.employees && this.employees.length > 0) {
      this.employeeToDisplay = this.employees[this.currentIndex];
    }
  }

  nextEmployee(): void {
    if (!this.employees || this.employees.length == 0) {
      return;
    }
    if (this.currentIndex < this.employees.length - 1) {
      this.currentIndex++;
      this.employeeToDisplay = this.employees[this.currentIndex];
    } else {
      this.currentIndex = 0;
      this.employeeToDisplay = this.employees[this.currentIndex];
    }
  }

  handleEmployeeClick(eventData: IEmployee) {
    this.clickedEmployee = eventData;
  }

}


