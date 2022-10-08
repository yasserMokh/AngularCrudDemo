import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDepartment } from 'src/app/models/interfaces/idepartment.interface';
import { DepartmentService } from 'src/app/services/department.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { IEmployee } from 'src/app/models/interfaces/iemployee.interface';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html'
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('empFormComponent') public employeeFormComponent: EmployeeFormComponent  | null = null;

  constructor(private _router: Router, private _employeeService: EmployeeService){
  }

  ngOnInit(): void {    
  }  

  saveEmployee(employeeModel: IEmployee): void {   
      this._employeeService.createEmployee(employeeModel).subscribe((emp)=>{
        console.log('added emp', emp);
        this._router.navigate(['employee.list']);    
      });   
      
  }

}
