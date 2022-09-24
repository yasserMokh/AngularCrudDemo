import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { IEmployee } from '../models/interfaces/iemployee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _employees:IEmployee[];
  
  constructor() { 
    this._employees= [
      new Employee( 1,
        'Mark',
         'Male',
         new Date('10/25/1988'),
         'Email',
         'IT',
         true,
         'mark@pragimtech.com',
         null,
         'assets/images/mark.png'
        ),
        new Employee( 2,
          'Mary',
           'Female',
           new Date('11/20/1979'),
           'Phone',
           'HR',
           true,
           null,
           '2345978640',
           'assets/images/mary.png'
          ),
          new Employee( 3,
            'John',
             'Male',
             new Date('3/25/1976'),
             'Phone',
             'IT',
             false,
             null,
             '5432978640',
             'assets/images/john.png'
            )
      ]
  }

  getAllEmployees(): IEmployee[]{
    return this._employees;
  }
}
