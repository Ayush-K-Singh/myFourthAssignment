import { HttpClient } from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class EmployeeService{
    employeeUrl:string = 'api/employee'
    employee: any[] = []
    constructor(private _http:HttpClient){}
    getemployee():any[]{
        return this.employee
    }
    getemployeeByApi():Observable<any[]>{
        return this._http.get<any[]>(this.employeeUrl)
    }
}