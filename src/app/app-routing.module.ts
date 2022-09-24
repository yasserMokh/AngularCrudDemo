import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './components/employee/create-employee.component';
import { EmployeeListComponent } from './components/employee/employee-list.component';

const routes: Routes = [
  {path: 'employee.list', component:EmployeeListComponent },
  {path:'employee.create', component:CreateEmployeeComponent},
  {path:'', redirectTo:'/employee.list', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
