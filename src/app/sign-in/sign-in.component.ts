import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  credentials = {
    email: '',
    password: ''
  };
  constructor(
    private router: Router,
    private authService: AuthService
    ) {}


    
  signIn() {
    this.authService.login(this.credentials)
      .then(() => this.router.navigate(['/']))
      .catch(err => alert(err.message) );
  }
}
