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
  selectedId: number = -1;
  confirmDelete: boolean = false;

  private _searchTerm: string = '';
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployeesByName(value);
  }

  constructor(private _employeeService: EmployeeService, private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._route.data.subscribe(routeData => {
      this.employees = routeData['employeeList'];
      this.filteredEmployees = this.employees;
      if (this.employees && this.employees.length > 0) {
        this.employeeToDisplay = this.employees[this.currentIndex];
      }
      this._route.paramMap.subscribe(params => {
        let id = params.get('id');
        if (!id) {
          return;
        }
        this.selectedId = +id;
      });
      this._route.queryParamMap.subscribe(params => {
        let searchString = params.get('searchTerm');
        if (!searchString) {
          return;
        }
        this.searchTerm = searchString;
      });
    });
    /* this._employeeService.getAllEmployees().subscribe(empList => {
      this.employees = empList;
      
    }); */

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

  onEmployeeClick(employeeId: number) {
    this._router.navigate(['employees', employeeId], (this._searchTerm) ? { queryParams: { 'searchTerm': this._searchTerm } } : {});
  }

  filterEmployeesByName(searchString: string): IEmployee[] | null {
    let searchResult = this.employees?.filter(emp => emp.name?.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
    if (!searchResult) {
      return null;
    }
    return searchResult;
  }

  viewEmployee(id: number): void {
    this._router.navigate(['employees', id], (this.searchTerm) ? { queryParams: { 'searchTerm': this.searchTerm } } : {});
  }

  deleteEmployee(id: number): void {
    this._employeeService.deleteEmployee(id).subscribe(()=>{
      console.log('employee ', id, ' deleted')
      this.reloadEmployees();  
    });
    
  }

  reloadEmployees(): void {
    this._employeeService.getAllEmployees().subscribe(emps=>{
      this.employees=emps;
      this.filteredEmployees = this.employees;
      if (!this.searchTerm) {
        return;
      }
      this.searchTerm = this.searchTerm;
    });
  }

}


