import { Component, OnInit } from '@angular/core';
import { Trip } from '../mock-trips'
import { TRIPS } from '../mock-trips';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  trips = TRIPS;
  cheapestTrip: Trip;
  mostExpensiveTrip: Trip;
  shoppingCart = {};



  constructor() { }

  ngOnInit() {
    this.cheapestTrip = this.trips.reduce((a, b) => a.price < b.price ? a : b);
    this.mostExpensiveTrip = this.trips.reduce((a, b) => a.price > b.price ? a : b);
  }

  addToShoppingCart(trip: Trip): void {
    let number = this.shoppingCart[trip.id]

    if (number) {
      number += 1;
    }
    else {
      number = 1;
    }
    if (number <= trip.limit) {
      this.shoppingCart[trip.id] = number;
    }
  }

  removeFromShoppingCart(trip: Trip): void {
    let number = this.shoppingCart[trip.id]
    if (number) {
      number -= 1;
    }
    else {
      number = 0;
    }
    if (number <= trip.limit) {
      this.shoppingCart[trip.id] = number;
    }
  }

  leftOffers(trip: Trip): number {
    return trip.limit - (this.shoppingCart[trip.id] || 0);
  }

  offersInShoppingCart(): number {
    return +Object.values(this.shoppingCart).reduce((a, b) => +a + +b, 0);
  }

}
