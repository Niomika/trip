import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Trip } from '../../app/trip';
import { TripsService } from '../services/trips.service';

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


  constructor(private tripsService: TripsService) {}

  ngOnInit() {
    this.getTrips();
    this.cheapestTrip = this.trips.reduce((a, b) => a.price < b.price ? a : b);
    this.mostExpensiveTrip = this.trips.reduce((a, b) => a.price > b.price ? a : b);
  }

  getTrips(){
    this.trips = this.tripsService.getTrips();
  }

  addToShoppingCart(trip: Trip): void {
    this.tripsService.addToShoppingCart(trip);
    this.getTrips();
    console.log(this.trips);
  }

  removeFromShoppingCart(trip: Trip): void {
    this.tripsService.removeFromShoppingCart(trip);
    this.getTrips();
  }

  deleteTrip(trip: Trip): void {
    this.tripsService.deleteTrip(trip);
    this.getTrips();
  }

  offersInShoppingCart(): number {
    return +Object.values(this.shoppingCart).reduce((a, b) => +a + +b, 0);
  }

}
