import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NHL66Service } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _router: Router,
    private _nhl66: NHL66Service
    ) { }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
    this._nhl66.getStateshot().subscribe({
      next: (stateshot) => {
        console.log(stateshot);
      }
    });

  }

}
