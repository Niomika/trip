import { Injectable } from '@angular/core';
import { Trip } from './mock-trips';

@Injectable({
  providedIn: 'root'
})
export class ShoopingCartService {

  shoppingCart = [];
  constructor() { }

  getTripsFromShoppingCart(): Array<Trip> {
    return this.shoppingCart;
  }

  addToShoppingCart(trip: Trip): void {
    let number = this.shoppingCart[trip.id]
    if (number) {
      number += 1;
    }
    else {
      number = 1;
    }
    if (trip.freePlaces > 0) {
      this.shoppingCart[trip.id] = number;
      //this.trips[this.trips.indexOf(trip)].freePlaces -= 1;
    }
  }

  removeFromShoppingCart(trip: Trip): void {
    let number = this.shoppingCart[trip.id];

    if (number) {
      number -= 1;
    }
    else {
      number = 0;
    }
    if (trip.freePlaces < trip.limit) {
      this.shoppingCart[trip.id] = number;
      //this.trips[this.trips.indexOf(trip)].freePlaces += 1;
    }
  }
  offersInShoppingCart(): number {
    //return +Object.values(this.shoppingCart).reduce((a, b) => +a + +b, 0);
    return this.shoppingCart.length;
  }
}
