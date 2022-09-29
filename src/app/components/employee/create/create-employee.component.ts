import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDepartment } from 'src/app/models/interfaces/idepartment.interface';
import { DepartmentService } from 'src/app/services/department.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { IEmployee } from 'src/app/models/interfaces/iemployee.interface';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html'
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('empForm') public createEmployeeForm: NgForm | null = null;

  datepickerConfig : Partial<BsDatepickerConfig>;
  departments: IDepartment[] | null = null;
  formValidationClass="needs-validation";

  employeeModel: IEmployee=new Employee();

  constructor(private _departmentService: DepartmentService, private _employeeService: EmployeeService, private _router: Router) { 
    this.datepickerConfig = Object.assign({}, 
      {
        containerClass:'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat:'DD/MM/YYYY'
      });
  }

  ngOnInit(): void {
    this.departments = this._departmentService.getAllDepartments();
  }

  saveEmployee(empForm: NgForm, employeeModel: IEmployee): void {
    //this.formValidationClass="was-validated";
    console.log(empForm.valid);
    console.log(empForm);
    if(empForm.valid){
      this._employeeService.saveEmployee(employeeModel);
      empForm.resetForm();
      //this._router.navigate(['employee.list']);
    }
  }

}
