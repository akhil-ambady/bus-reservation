import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addbus',
  templateUrl: './addbus.component.html',
  styleUrls: ['./addbus.component.css']
})
export class AddbusComponent implements OnInit {

  public form: FormGroup;
  submitted = false;
  val : any = 1;
  

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm() {
    this.form = this.formBuilder.group({
      busID: ['', Validators.required],
      bustype: ['', Validators.required],
      district: ['', Validators.required],
      district1: ['', Validators.required],
      time: ['', Validators.required],
      time1: ['', Validators.required],
      fare: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    }
    );

  }

  get f() {
    return this.form.controls;
  }

  onSave() {
    

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const payload = this.form.value;
    
    
    localStorage.setItem('Data'+this.val,JSON.stringify(payload));
    localStorage.setItem('val',this.val);
    this.val+=1;
    alert("Data added in localstorage");
    this.form.reset();
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }

}
