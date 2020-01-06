import { AuthService } from './../services/auth.service';
import { User } from '../models/user';
import { OrdersService } from './../services/orders.service';
import { TripsService } from './../services/trips.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trip } from '../../app/trip';
import { ShoopingCartService } from '../services/shooping-cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shooping-cart',
  templateUrl: './shooping-cart.component.html',
  styleUrls: ['./shooping-cart.component.css']
})
export class ShoopingCartComponent implements OnInit {
  shoppingCart: Trip[] = [];
  offersInShoppingCart = 0;
  isLoaded = false;
  constructor(private tripsService: TripsService, private orderService: OrdersService, private userService: AuthService) { }

  ngOnInit() {
    this.getOffersInShoppingCart();
    this.getTrips();
  }

  getTrips() {
    this.tripsService.getTrips().subscribe(shoppingCart => {
      this.shoppingCart = shoppingCart;
      this.isLoaded = true;
    });
  }

  getOffersInShoppingCart() {
    this.offersInShoppingCart = this.tripsService.getOffersInShoppingCart();
  }

  removeFromCart(trip: Trip) {
    this.tripsService.removeOneTripFromCart(trip);
    this.getTrips();
  }

  makeOrder() {
    this.userService.getUsers().subscribe(users => {
      users.forEach(user => {
        if (user.email === this.userService.getUser().email) {
          this.userService.setUser(user);
          this.shoppingCart.forEach(item => {
            if (item.inCart > 0) {
              this.orderService.addOrder({ email: user.email, trip_id: item.id, count: item.inCart }).subscribe(res => {
                item.limit -= item.inCart;
                item.inCart = 0;
                this.tripsService.updateTrip(item);
              });
            }
          });
        }
      });
      this.getTrips();
    });
  }
}
