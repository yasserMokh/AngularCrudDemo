import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { IEmployee } from 'src/app/models/interfaces/iemployee.interface';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html'
})
export class ViewEmployeeComponent implements OnInit, OnChanges {
  private _employee:IEmployee = new Employee();
  @Input()
  set employee(val: Employee){
    console.log('Previous:', this._employee?.name, 'current: ', val.name);
    this._employee=val;
  }
  get employee() :Employee{
    return this._employee;
  }

  @Output() employeeClicked: EventEmitter<IEmployee>= new EventEmitter<IEmployee>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  handleEmployeeClick():void{
    this.employeeClicked.emit(this._employee);
  }

}
