import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee/list/employee-list.component';
import { CreateEmployeeComponent } from './components/employee/create/create-employee.component';
import { SelectRequiredValidatorDirective } from './shared/validation/select-required-validator.directive';
import { ViewEmployeeComponent } from './components/employee/view/view-employee.component';
import { CompareValidatorDirective } from './shared/validation/compare-validator.directive';
import { EmployeeDetailsComponent } from './components/employee/details/employee-details.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    CompareValidatorDirective,
    ViewEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
