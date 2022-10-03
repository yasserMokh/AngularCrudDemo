import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { IEmployee } from 'src/app/models/interfaces/iemployee.interface';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html'
})
export class EditEmployeeComponent implements OnInit {

  private _id: number = 0;

  @ViewChild('empFormComponent') public employeeFormComponent: EmployeeFormComponent  | null = null;  

  employee: IEmployee = new Employee();

  constructor(private _router: Router, private _route: ActivatedRoute, private _employeeService: EmployeeService){
  }

  ngOnInit(): void {    
    this._employeeService.getAllEmployees().subscribe(empList => {      
      this._route.paramMap.subscribe(params => {
        let id = params.get('id');
        if (!id) {
          return;
        }
        this._id = +id;
        let emp = this._employeeService.getEmployee(this._id);
        if (!emp) {
          return;
        }
        this.employee = Object.assign({},emp);
      });
    });
  }  

  saveEmployee(employeeModel: IEmployee): void {   
      this._employeeService.saveEmployee(employeeModel);   
      this._router.navigate(['employee.list']);    
  }

}
