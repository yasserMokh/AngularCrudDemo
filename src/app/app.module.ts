import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee/employee-list.component';
import { CreateEmployeeComponent } from './components/employee/create-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent
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
