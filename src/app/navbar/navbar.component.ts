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
  isLoaded = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.isUserLoggedIn) {
      this.checkIfisAdmin();
    }
  }
  checkIfisAdmin() {
    this.auth.getUsers().subscribe(users => {
      users.forEach(user => {
        if (user.email === this.auth.getUser().email) {
          this.auth.setUser(user);
          if (user.role === "admin") {
            this.isAdmin = true;
          }
          this.isLoaded = true;
        }
      });
    });
  }

  isUserLoggedIn(): boolean {
    return this.auth.isUserLoggedIn();
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl("/signin");
  }

}
