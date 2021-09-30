import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-index',
  templateUrl: './employee-index.component.html',
  styleUrls: ['./employee-index.component.css']
})
export class EmployeeIndexComponent implements OnInit {
  employees:Employee[] | undefined;
  constructor(private _es:EmployeeService) { }
  getEmployeesViaService(){
    this._es.getEmployeesViaApi()
      .subscribe(response=>this.employees=response);
  }
  ngOnInit(): void {
  }
}
