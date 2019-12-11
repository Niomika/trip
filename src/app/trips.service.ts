import { Injectable } from '@angular/core';
import { TRIPS } from './mock-trips';
import { Trip } from './trip';

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor() { }

  getTrips(): Trip[] {
    return TRIPS;
  }

  getTrip(id): Trip {
    return TRIPS.find(x => x.id === id);
  }

  addTrip(trips,trip): void {
    trips.push(trip);
  }

  deleteTrip(trips,trip): void {
    let number = trips.shoppingCart[trip.id];
    if (number) {
      trips.shoppingCart[trip.id] = 0;
    }
    trips.splice(trips.indexOf(trip), 1);
  }

}
