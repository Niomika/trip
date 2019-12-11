import { TRIPS } from './../mock-trips';
import { Injectable } from '@angular/core';
import { Trip } from '../../app/trip';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  offersInShoppingCart = 0;
  trips: Trip[] = TRIPS;
  constructor() { }

  getTrips(): Trip[] {
    return this.trips;
  }

  getTrip(id: number): Trip {
    return this.trips.find(x => x.id === id);
  }

  addTrip(trip: Trip): void {
    this.trips.push(trip);
  }

  deleteTrip(trip): void {
    this.trips.splice(this.trips.indexOf(trip), 1);
  }

  addToShoppingCart(trip: Trip) {
    let index = this.trips.indexOf(trip)
    if (this.trips[index].freePlaces > 0) {
      this.offersInShoppingCart += 1;
      this.trips[index].freePlaces -= 1;
      this.trips[index].inCart += 1;
    }
  }

  removeFromShoppingCart(trip: Trip) {
    let index = this.trips.indexOf(trip)
    if (this.trips[index].freePlaces < this.trips[index].limit) {
      this.offersInShoppingCart -= 1;
      this.trips[index].freePlaces += 1;
      this.trips[index].inCart -= 1;
    }
  }

  getOffersInShoppingCart(): number {
    return this.offersInShoppingCart;
  }

  removeOneTripFromCart(trip: Trip) {
    let index = this.trips.indexOf(trip);
    this.trips[index].freePlaces += this.trips[index].inCart;
    this.trips[index].inCart = 0;
  }

}
