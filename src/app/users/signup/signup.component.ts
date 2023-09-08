import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signup } from './store/signup.action';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private store: Store) {}

  onSubmit(formData: any) {

    console.log('Form submitted with data:', formData);

     this.store.dispatch(signup({
      fname: formData.fname,
      lname: formData.lname,
      email: formData.email,
      password: formData.password,
    }));
  }

}
