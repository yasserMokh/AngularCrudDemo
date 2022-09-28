import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { IEmployee } from 'src/app/models/interfaces/iemployee.interface';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html'
})
export class ViewEmployeeComponent implements OnInit {
  @Input() employee:IEmployee = new Employee();
  constructor() { }

  ngOnInit(): void {
  }

}
