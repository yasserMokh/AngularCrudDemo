import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { IEmployee } from '../models/interfaces/iemployee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _employees: IEmployee[];

  constructor() {
    this._employees = [
      {
        id: 1,
        name: 'Mark',
        gender: 'Male',
        dateOfBirth: new Date('10/25/1988'),
        contactPreference: 'Email',
        department: 1,
        isActive: true,
        email: 'mark@pragimtech.com',
        phoneNumber: null,
        photoPath: 'assets/images/mark.png'
      },
      {
        id: 2,
        name: 'Mary',
        gender: 'Female',
        dateOfBirth: new Date('11/20/1979'),
        contactPreference: 'Phone',
        department: 2,
        isActive: true,
        email: null,
        phoneNumber: '2345978640',
        photoPath: 'assets/images/mary.png'
      },
      {
        id: 3,
        name: 'John',
        gender: 'Male',
        dateOfBirth: new Date('3/25/1976'),
        contactPreference: 'Phone',
        department: 1,
        isActive: false,
        email: null,
        phoneNumber: '5432978640',
        photoPath: 'assets/images/john.png'
      }
    ]
  }

  getAllEmployees(): IEmployee[] {
    return this._employees;
  }

  getEmployee(employeeId:number):IEmployee | null{
    let emp = this._employees.find(e=>e.id===employeeId);
    if(!emp){
      return null;
    }
    return emp;
  }

  saveEmployee(employee:IEmployee): void{
    this._employees.push(employee);
  }
}
