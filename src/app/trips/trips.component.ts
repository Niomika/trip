import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Trip } from '../mock-trips'
import { TRIPS } from '../mock-trips';
import { TripsService } from '../trips.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css'],
  providers: [TripsService]
})
export class TripsComponent implements OnInit {

  trips;
  cheapestTrip: Trip;
  mostExpensiveTrip: Trip;
  shoppingCart = {};
  minPriceFilter: string;
  maxPriceFilter: string;
  destination: string;


  constructor(private tripsService: TripsService) {
    this.trips = this.tripsService.getTrips();

  }

  ngOnInit() {
    this.cheapestTrip = this.trips.reduce((a, b) => a.price < b.price ? a : b);
    this.mostExpensiveTrip = this.trips.reduce((a, b) => a.price > b.price ? a : b);
    this.trips.forEach(element => {
      this.shoppingCart[element.id] = 0;
    });
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
      this.trips[this.trips.indexOf(trip)].freePlaces -= 1;
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
      this.trips[this.trips.indexOf(trip)].freePlaces += 1;
    }
  }

  deleteTrip(trip: Trip): void {

    let number = this.shoppingCart[trip.id];
    if (number) {
      this.shoppingCart[trip.id] = 0;
    }
    this.trips.splice(this.trips.indexOf(trip), 1);
  }

  offersInShoppingCart(): number {
    return +Object.values(this.shoppingCart).reduce((a, b) => +a + +b, 0);
  }

}
