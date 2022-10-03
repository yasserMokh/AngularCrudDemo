import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { IEmployee } from 'src/app/models/interfaces/iemployee.interface';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html'
})
export class EmployeeDetailsComponent implements OnInit {
  private _id: number = 0;
  private _employeesCount = 0;
  employee: IEmployee = new Employee();

  constructor(private _route: ActivatedRoute, private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit(): void {
    this._employeeService.getAllEmployees().subscribe(empList => {
      this._employeesCount = empList.length;
      this._route.paramMap.subscribe(params => {
        let id = params.get('id');
        if (!id) {
          return;
        }
        this._id = +id;
        let emp = this._employeeService.getEmployee(this._id);
        if (!emp) {
          return;
        }
        this.employee = emp;
      });
    });

  }

  onNextClick(): void {
    if (this._id < this._employeesCount) {
      this._id++;
    }
    else {
      this._id = 1;
    }
    this._router.navigate(['employees', this._id]);
  }

}
