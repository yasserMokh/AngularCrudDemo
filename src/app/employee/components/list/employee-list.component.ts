import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { viLocale } from 'ngx-bootstrap/chronos';
import { Employee } from 'src/app/models/employee.model';
import { IEmployee } from 'src/app/models/interfaces/iemployee.interface';
import { EmployeeService } from 'src/app/services/employee.service';
import { FilterEmployeesByNamePipe } from '../../filters/filter-employees-by-name.pipe';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent implements OnInit {

  employees: IEmployee[] | null = null;
  filteredEmployees: IEmployee[] | null = null;

  currentIndex: number = 0;
  employeeToDisplay: IEmployee = new Employee();
  clickedEmployee: IEmployee | null = null;
  selectedId: number=-1;

  private _searchTerm:string='';
  get searchTerm():string{
    return this._searchTerm;
  }
  set searchTerm(value: string){
    this._searchTerm=value;
    this.filteredEmployees = this.filterEmployeesByName(value);
  }

  constructor(private _employeeService: EmployeeService, private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.employees = this._employeeService.getAllEmployees();
    this.filteredEmployees=this.employees;
    if (this.employees && this.employees.length > 0) {
      this.employeeToDisplay = this.employees[this.currentIndex];
    }
    this._route.paramMap.subscribe(params=>{
      let id = params.get('id');
      if(!id){
        return;
      }
      this.selectedId=+id;
    });
  }

  nextEmployee(): void {
    if (!this.employees || this.employees.length == 0) {
      return;
    }
    if (this.currentIndex < this.employees.length - 1) {
      this.currentIndex++;
      this.employeeToDisplay = this.employees[this.currentIndex];
    } else {
      this.currentIndex = 0;
      this.employeeToDisplay = this.employees[this.currentIndex];
    }
  }

  handleEmployeeClick(eventData: IEmployee) {
    this.clickedEmployee = eventData;
  }

  onEmployeeClick(employeeId: number){
      this._router.navigate(['employees', employeeId]);
  }

  filterEmployeesByName(searchString: string):IEmployee[] | null{
    let searchResult= this.employees?.filter(emp=> emp.name?.toLowerCase().indexOf(searchString.toLowerCase())!==-1);
    if(!searchResult){
      return null;
    }
    return searchResult;
  }

}


