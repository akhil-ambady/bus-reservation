import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) { 
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]      
    });    
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    // const payload = this.form.value;

    if (this.form.controls['username'].value ==="admin" && this.form .controls['password'].value ==="admin") {
      this.router.navigate(['admin']);
    }
    else if (this.form.controls['username'].value ==="user" && this.form .controls['password'].value ==="user") {
      this.router.navigate(['user']);
    }
    else{
      alert("Invalid Credentials");
    }
  }
}
