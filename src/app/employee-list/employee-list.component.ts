import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../service/employee-list/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employee:any[]=[];
  constructor(private _empsrv:EmployeeService){}
  ngOnInit():void{
    this._empsrv.getemployeeByApi().subscribe((prodata)=>{
      this.employee = prodata
    })

    console.log(this.employee);
    
  }
}

