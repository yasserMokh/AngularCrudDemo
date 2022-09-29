import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './components/employee/create/create-employee.component';
import { CreateEmployeeCanDeactivateGuard } from './components/employee/create/create-employee-can-deactivate.guard';
import { EmployeeListComponent } from './components/employee/list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee/details/employee-details.component';

const routes: Routes = [
  {path: 'employee.list', component:EmployeeListComponent },
  {path:'employee.create', component:CreateEmployeeComponent, canDeactivate: [CreateEmployeeCanDeactivateGuard]},
  {path: 'employees/:id', component:EmployeeDetailsComponent },
  {path:'', redirectTo:'/employee.list', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
