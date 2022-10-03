import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './employee/components/create/create-employee.component';
import { CreateEmployeeCanDeactivateGuard } from './employee/guards/create-employee-can-deactivate.guard';
import { EmployeeListComponent } from './employee/components/list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/components/details/employee-details.component';
import { EmployeeListResolver } from './employee/resolvers/employee-list.resolver';
import { EditEmployeeComponent } from './employee/components/edit/edit-employee.component';

const routes: Routes = [
  {path: 'employee.list', component:EmployeeListComponent, resolve: { employeeList: EmployeeListResolver } },
  {path:'employee.create', component:CreateEmployeeComponent, canDeactivate: [CreateEmployeeCanDeactivateGuard]},
  {path:'employee.edit/:id', component:EditEmployeeComponent },
  {path: 'employees/:id', component:EmployeeDetailsComponent },
  {path:'', redirectTo:'/employee.list', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
