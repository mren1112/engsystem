import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }


  validarLogin = () => {
    alert('input login');
  }

  clearinput = () => {
    window.location.reload();
  }


}
