import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IDepartment } from 'src/app/models/interfaces/idepartment.interface';
import { DepartmentService } from 'src/app/services/department.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  datepickerConfig : Partial<BsDatepickerConfig>;
  departments: IDepartment[] | null = null;

  name: string = '';
  email: string = '';
  gender: string = '';
  contactPreference: string = '';
  phoneNumber: string = '';
  department: string = '';
  isActive: boolean = true;
  dateOfBirth: Date | null = null;

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

  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value);
  }

}
