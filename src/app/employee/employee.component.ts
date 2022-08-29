import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
employeeForm = new FormGroup({
  firstname: new FormControl('', [Validators.required]),
  middlename: new FormControl(),
  lastname: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required]),
  contact: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
  gender: new FormControl('', [Validators.required]),
  DOB: new FormControl('', [Validators.required]),
  employeetype: new FormControl('', [Validators.required]),
  address: new FormControl('', [Validators.required]),
  pincode: new FormControl('', [Validators.required,Validators.minLength(6),Validators.maxLength(6)])
})

onSubmit() {
  console.log(this.employeeForm.value);
}


userInfo = {
  firstName: "",
  middleName: '',
  lastName: '',
  dept: 'IT',
  gender: 'Male',
  Dob: undefined,
  address: '',
  pincode: ''
}

onSubmit2(myForm: NgForm) {
  console.log(myForm.value);
}


}
