import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url:string='http://localhost:9003/employees';
  getEmployeesViaApi(){
     return this._http.get<Employee[]>(this.url);
  }
  constructor(private _http:HttpClient) { }
}