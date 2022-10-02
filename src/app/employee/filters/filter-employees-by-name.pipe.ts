import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from 'src/app/models/interfaces/iemployee.interface';

@Pipe({
  name: 'filterEmployeesByName'
})
export class FilterEmployeesByNamePipe implements PipeTransform {

  transform(employees: IEmployee[] | null, searchTerm: string): IEmployee[] | null{
    if(!employees || !searchTerm){
      return employees;
    }
    return employees.filter(emp=>emp.name?.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
  }

}
