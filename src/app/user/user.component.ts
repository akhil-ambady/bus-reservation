import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public form: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,

  ) {
    this.buildForm();
   }

  buildForm() {
    this.form = this.formBuilder.group({
      origin: ['TVM', Validators.required],
      dest: ['EKM', Validators.required],
      date: ['', Validators.required],
      seats: ['', Validators.required]
    }
    );

  }

  get f() {
    return this.form.controls;
  }

  payload : any
  val1 : any
  val2 : any
  arrpayload = [];
  arrpayload1 = [];
  data : any

  ngOnInit() {
    this.val1 = localStorage.getItem('val');  
    this.val2 = this.val1;  
  }

  logout() {
    this.router.navigate(['*']);
  }

  onFind() {
    this.submitted = true;
    localStorage.setItem('Seats',this.form.controls['seats'].value);
    if (this.form.invalid) {
      return;
    }

    while(this.val1 != 0) {
      this.payload = localStorage.getItem('Data'+this.val1);
      this.data = JSON.parse(this.payload);
      if( (this.data['district'] == this.form.controls['origin'].value) && 
          (this.data['district1'] == this.form.controls['dest'].value))  {
            this.arrpayload.push(this.data);            
      }
      this.val1-=1;
    }

    localStorage.setItem('Search',JSON.stringify(this.arrpayload));

    this.router.navigate(['search']);

  }

}
