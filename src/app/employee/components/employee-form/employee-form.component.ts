import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { Employee } from 'src/app/models/employee.model';
import { IDepartment } from 'src/app/models/interfaces/idepartment.interface';
import { IEmployee } from 'src/app/models/interfaces/iemployee.interface';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html'
})
export class EmployeeFormComponent implements OnInit {
  @ViewChild('empForm') public employeeForm: NgForm | null = null;
  @Output() formSubmitted: EventEmitter<IEmployee>= new EventEmitter<IEmployee>();


  datepickerConfig : Partial<BsDatepickerConfig>;
  departments: IDepartment[] | null = null;  

  @Input()
  employeeModel: IEmployee=new Employee();

  constructor(private _departmentService: DepartmentService, private _employeeService: EmployeeService) { 
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

  onFormSubmit(empForm: NgForm, employeeModel: IEmployee):void{  
    console.log(empForm.valid);
    console.log(empForm);
    if(!empForm.valid){
      return;
    }
    this.formSubmitted.emit(employeeModel);
    empForm.resetForm();
  }

}
