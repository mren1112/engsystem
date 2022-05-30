import { Component, Input, OnInit, Output } from '@angular/core';

import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Loginform } from '../interfaces/login/loginform';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginformdata: Loginform = {};
  loginform: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    // username: new FormControl(''),
  });
  submitted = false;

  constructor(private fb: FormBuilder,private x:LoginService) {

  }

  ngOnInit(): void {
this.x.getRestaurant().subscribe();
  }

  get f() {
    return this.loginform.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginform.invalid) {
      return;
    }
    console.log(JSON.stringify(this.loginform.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.loginform.reset();
  }


  validateform() {
    this.loginform = this.fb.group({
      name: ['', Validators.required]
    });
  }

  validateLogin = (loginformdata: Loginform) => {
    //this.loginformdata.username = '';
    alert(loginformdata.username + ' ' + loginformdata.password);
  }

  clearinput = () => {
    window.location.reload();
  }


}
