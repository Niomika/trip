import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isAdmin = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.isUserLoggedIn){
      this.isAdmin = this.checkIfisAdmin();
      console.log(this.isAdmin);
    }
  }
  checkIfisAdmin(): boolean{
    return this.auth.isAdmin();
  }

  isUserLoggedIn(): boolean {
   return this.auth.isUserLoggedIn();
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl("/signin");
  }

}
