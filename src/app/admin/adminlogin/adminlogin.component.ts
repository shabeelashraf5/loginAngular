import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as UsersActions from './store/adminlogin.action'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  loginForm: FormGroup;

  

  constructor(private store: Store, private formBuilder: FormBuilder,) {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  get emailControl() {
    return this.loginForm.get('email');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }

  onLoginClick() {

   
    this.loginForm.markAllAsTouched();
    
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.store.dispatch(UsersActions.login({ email, password }));
      console.log('Login form submitted.');
    }
  }

}
