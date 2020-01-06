import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(
    private authService: AuthService
  ) { }

  newUserForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl('user')
  });
  signUp() {
    //if (this.newUserForm.value.password !== this.newUserForm.value.passwordConfirmation) {
    // alert('Provided passwords differ');
    // return;
    // }
    this.authService.register(this.newUserForm.value.email, this.newUserForm.value.password)
      .then(() => {
        this.authService.addUserToDatabase(this.newUserForm.value);
        alert('Account was created');
      })
      .catch(err => alert(err.message));


  }

}
