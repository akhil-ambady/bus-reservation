import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['*']);
  }

  book() {
    var seats = localStorage.getItem('Seats')
    alert("Booked "+seats+" in the bus");
  }
}
