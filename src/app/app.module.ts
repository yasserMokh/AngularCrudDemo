import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/components/list/employee-list.component';
import { CreateEmployeeComponent } from './employee/components/create/create-employee.component';
import { SelectRequiredValidatorDirective } from './shared/validation/select-required-validator.directive';
import { ViewEmployeeComponent } from './employee/components/view/view-employee.component';
import { CompareValidatorDirective } from './shared/validation/compare-validator.directive';
import { EmployeeDetailsComponent } from './employee/components/details/employee-details.component';
import { FilterEmployeesByNamePipe } from './employee/filters/filter-employees-by-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    CompareValidatorDirective,
    ViewEmployeeComponent,
    EmployeeDetailsComponent,
    FilterEmployeesByNamePipe
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
