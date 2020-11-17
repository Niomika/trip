import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoaded = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {

        }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl("/signin");
  }

}
