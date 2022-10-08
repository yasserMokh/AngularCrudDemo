import { Injectable } from '@angular/core';
import { Observable, of as ObservableOf, delay as ObservableDelay } from 'rxjs';
import { Employee } from '../models/employee.model';
import { IEmployee } from '../models/interfaces/iemployee.interface';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _employees: IEmployee[];

  constructor(private _httpClient: HttpClient) {

    this._employees = [
      {
        id: 1,
        name: 'Mark',
        gender: 'male',
        dateOfBirth: new Date('10/25/1988'),
        contactPreference: 'email',
        department: 1,
        isActive: true,
        email: 'mark@pragimtech.com',
        phoneNumber: null,
        photoPath: 'assets/images/mark.png'
      },
      {
        id: 2,
        name: 'Mary',
        gender: 'female',
        dateOfBirth: new Date('11/20/1979'),
        contactPreference: 'phone',
        department: 2,
        isActive: true,
        email: null,
        phoneNumber: '2345978640',
        photoPath: 'assets/images/mary.png'
      },
      {
        id: 3,
        name: 'John',
        gender: 'male',
        dateOfBirth: new Date('3/25/1976'),
        contactPreference: 'phone',
        department: 1,
        isActive: false,
        email: null,
        phoneNumber: '5432978640',
        photoPath: 'assets/images/john.png'
      }
    ]
  }

  getAllEmployees(): Observable<IEmployee[]> {
    // return ObservableOf(this._employees).pipe(ObservableDelay(2000));
    return this._httpClient.get<IEmployee[]>('http://localhost:3000/employees');
  }

  getEmployee(employeeId: number): IEmployee | null {
    let emp = this._employees.find(e => e.id === employeeId);
    if (!emp) {
      return null;
    }
    return emp;
  }

  saveEmployee(employee: IEmployee): void {

    let empIndex = this._employees.findIndex(e => e.id === employee.id);
    if (empIndex == -1) {
      return;
    }
    this._employees[empIndex] = Object.assign({}, employee);

  }


  createEmployee(employee: IEmployee): void {
    let empCopy = Object.assign({}, employee);
    let maxId = this._employees.reduce((e1, e2) => {
      return (e1.id > e2.id) ? e1 : e2;
    }).id;
    empCopy.id = maxId + 1;
    this._employees.push(empCopy);
  }

  deleteEmployee(id: number) {
    let empIndex = this._employees.findIndex(e => e.id === id);
    if (empIndex == -1) {
      return;
    }
    this._employees.splice(empIndex, 1);
  }
}
