import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{

  credentials = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };


  constructor(
    private router: Router,
    private authService: AuthService
    ) {}
    

  signUp() {
    if (this.credentials.password !== this.credentials.passwordConfirmation) {
      alert('Provided passwords differ');
      return;
    }
    this.authService.register(this.credentials)
      .then(() =>alert('Account was created'))
      .catch(err => alert(err.message));
  }

}
