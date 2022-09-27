import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDepartment } from 'src/app/models/interfaces/idepartment.interface';
import { DepartmentService } from 'src/app/services/department.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { IEmployee } from 'src/app/models/interfaces/iemployee.interface';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  datepickerConfig : Partial<BsDatepickerConfig>;
  departments: IDepartment[] | null = null;
  formValidationClass="needs-validation";

  employeeModel: IEmployee=new Employee();

  constructor(private _departmentService: DepartmentService) { 
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
  }

}
