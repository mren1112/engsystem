import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  studentName: string = '';
  role: string = '';

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

}
