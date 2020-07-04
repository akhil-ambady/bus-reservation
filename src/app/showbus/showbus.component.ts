import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showbus',
  templateUrl: './showbus.component.html',
  styleUrls: ['./showbus.component.css']
})
export class ShowbusComponent implements OnInit {

  constructor() {
   }

  payload : any
  val1 : any
  arrpayload = [];

  ngOnInit() {
    this.val1 = localStorage.getItem('val');    
  }

  onload () {
    while(this.val1 != 0) {
      this.payload = localStorage.getItem('Data'+this.val1);
      this.arrpayload.push(JSON.parse(this.payload));      
      this.val1-=1;
    }
  }

  

}
