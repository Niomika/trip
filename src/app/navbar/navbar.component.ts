import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() { }
  isAdmin(): boolean{
    return this.auth.isAdmin();
  }

  isUserLoggedIn(): boolean {
   return this.auth.isUserLoggedIn();
  }

  logout() {
    this.auth.logout();
  }

}
