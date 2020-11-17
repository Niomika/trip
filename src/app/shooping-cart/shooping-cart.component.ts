import { AuthService } from './../services/auth.service';
import { User } from '../models/user';
import { OrdersService } from './../services/orders.service';
import { TripsService } from './../services/trips.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestsAndBugsData } from '../TestsAndBugsData';
import { ShoopingCartService } from '../services/shooping-cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shooping-cart',
  templateUrl: './shooping-cart.component.html',
  styleUrls: ['./shooping-cart.component.css']
})
export class ShoopingCartComponent implements OnInit {
  shoppingCart: TestsAndBugsData[] = [];
  offersInShoppingCart = 0;
  isLoaded = false;
  constructor(private tripsService: TripsService, private orderService: OrdersService, private userService: AuthService) { }

  ngOnInit() {
    this.getOffersInShoppingCart();
    this.getTrips();
  }

  getTrips() {
    
  }

  getOffersInShoppingCart() {
    this.offersInShoppingCart = this.tripsService.getOffersInShoppingCart();
  }

  removeFromCart(trip: TestsAndBugsData) {
    this.tripsService.removeOneTripFromCart(trip);
    this.getTrips();
  }

  makeOrder() {
    this.userService.getUsers().subscribe(users => {
      users.forEach(user => {
        if (user.email === this.userService.getUser().email) {
          this.userService.setUser(user);
        }
      });
      this.getTrips();
    });
  }
}
