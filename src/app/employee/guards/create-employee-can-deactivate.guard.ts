import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateEmployeeComponent } from '../components/create/create-employee.component';
import { EmployeeFormComponent } from '../components/employee-form/employee-form.component';

@Injectable({
  providedIn: 'root'
})
export class CreateEmployeeCanDeactivateGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: CreateEmployeeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {      
    if(component.employeeFormComponent?.employeeForm?.dirty){
      return confirm('Are you sure you want to discard your changes?');
    }
    return true;
  }
  
}
