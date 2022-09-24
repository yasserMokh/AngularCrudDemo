import { Injectable } from '@angular/core';
import { Department } from '../models/department.model';
import { IDepartment } from '../models/interfaces/idepartment.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private _departments:IDepartment[];
  constructor() { 
    this._departments= [
      new Department(1, 'IT'),
      new Department(2, 'HR'),
      new Department(3, 'Admin'),
      new Department(4, 'Business'),
      new Department(5, 'Marketing'),
      new Department(6, 'Payroll')
    ]
  }

  getAllDepartments():IDepartment[]{
    return this._departments;
  }

}
