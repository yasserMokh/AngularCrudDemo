import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of as ObservableOf } from 'rxjs';
import { IEmployee } from 'src/app/models/interfaces/iemployee.interface';
import { EmployeeService } from 'src/app/services/employee.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListResolver implements Resolve<IEmployee[]> {

  constructor(private _employeeService: EmployeeService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEmployee[]> {
    return this._employeeService.getAllEmployees();
  }
}
