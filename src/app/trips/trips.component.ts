import { AuthService } from './../services/auth.service';
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

  trips: Trip[];
  cheapestTrip: Trip;
  mostExpensiveTrip: Trip;
  shoppingCart = {};
  minPriceFilter: string;
  maxPriceFilter: string;
  destination: string;
  startDateFilter: string;
  finishDateFilter: string;


  constructor(private tripsService: TripsService, private authService: AuthService) {}

  ngOnInit() {
    this.getTrips();
    //this.specialItems();
  }

  specialItems(){
    this.cheapestTrip = this.trips.reduce((a, b) => a.price < b.price ? a : b);
    this.mostExpensiveTrip = this.trips.reduce((a, b) => a.price > b.price ? a : b);
  }
  getTrips(){
    console.log('pobieram wycieczki');
    this.tripsService.getTrips().subscribe(trips => this.trips = trips);
  }

  addToShoppingCart(trip: Trip): void {
    this.tripsService.addToShoppingCart(trip, trip.inCart, trip.freePlaces);
    this.getTrips();
    console.log(this.trips);
  }

  removeFromShoppingCart(trip: Trip): void {
    this.tripsService.removeFromShoppingCart(trip, trip.inCart, trip.freePlaces);
    this.getTrips();
  }

  deleteTrip(trip: Trip): void {
    this.tripsService.deleteTrip(trip).subscribe(res => { this.trips.splice( this.trips.indexOf(trip), 1); });;
    this.getTrips();
  }

  offersInShoppingCart(): number {
    return +Object.values(this.shoppingCart).reduce((a, b) => +a + +b, 0);
  }

  addItem(trip: Trip) {
    this.tripsService.addTrip(trip).subscribe(newItem => this.trips.push(newItem));
}

}
