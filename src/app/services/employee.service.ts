import { Injectable } from '@angular/core';
import { Observable, of as ObservableOf, delay as ObservableDelay } from 'rxjs';
import { Employee } from '../models/employee.model';
import { IEmployee } from '../models/interfaces/iemployee.interface';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _baseUrl:string = 'http://localhost:3000/employees'

  constructor(private _httpClient: HttpClient) {
    
  }

  getAllEmployees(): Observable<IEmployee[]> {
    // return ObservableOf(this._employees).pipe(ObservableDelay(2000));
    return this._httpClient.get<IEmployee[]>(this._baseUrl);
  }

  getEmployee(employeeId: number): Observable<IEmployee> {
    return this._httpClient.get<IEmployee>(`${this._baseUrl}/${employeeId}`);
    /*let emp = this._employees.find(e => e.id === employeeId);
    if (!emp) {
      return null;
    }
    return emp;*/
  }

  saveEmployee(employee: IEmployee): Observable<void> {

    return this._httpClient.put<void>(`${this._baseUrl}/${employee.id}`, employee);

    /*let empIndex = this._employees.findIndex(e => e.id === employee.id);
    if (empIndex == -1) {
      return;
    }
    this._employees[empIndex] = Object.assign({}, employee);*/
  }


  createEmployee(employee: IEmployee): Observable<IEmployee> {
    /*let empCopy = Object.assign({}, employee);
    let maxId = this._employees.reduce((e1, e2) => {
      return (e1.id > e2.id) ? e1 : e2;
    }).id;
    empCopy.id = maxId + 1;

    //this._employees.push(empCopy);
    console.log('emp to add', empCopy);*/
    return this._httpClient.post<IEmployee>('http://localhost:3000/employees', employee);
  }

  deleteEmployee(id: number): Observable<void> {
    return this._httpClient.delete<void>(`${this._baseUrl}/${id}`);
    /*let empIndex = this._employees.findIndex(e => e.id === id);
    if (empIndex == -1) {
      return;
    }
    this._employees.splice(empIndex, 1);*/
  }
}
