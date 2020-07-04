import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private router: Router,
    
  ) { }

  payload : any
  datas : any

  ngOnInit() {    
  }

  onload () {
    // this.arrpayload = localStorage.getItem('Search');
    this.payload = localStorage.getItem('Search');
    this.datas = JSON.parse(this.payload);        
  }

  logout() {
    this.router.navigate(['*']);
  }

  select() {
    this.router.navigate(['select']);
  }



}
