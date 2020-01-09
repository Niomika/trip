import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Trip } from "../../app/trip";
import { AuthService } from '../services/auth.service';

@Component({
  selector: "app-trip",
  templateUrl: "./trip.component.html",
  styleUrls: ["./trip.component.css"]
})
export class TripComponent implements OnInit {
  @Input() trip: Trip;  
  @Input() special: boolean;
  photo = "";

  @Output() addToCart: EventEmitter<Trip> = new EventEmitter<
    Trip
  >();
  @Output() removeFromCart: EventEmitter<Trip> = new EventEmitter<
    Trip
  >();
  @Output() deleteTrip: EventEmitter<Trip> = new EventEmitter<
    Trip
  >();

  isAdmin = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.photo += this.trip.photo;
    console.log(this.trip);
    if(this.isUserLoggedIn){
      this.isAdmin = this.checkIfisAdmin();
      console.log(this.isAdmin);
    }
  }

  checkIfisAdmin(): boolean{
    return this.auth.isAdmin();
  }
  isUserLoggedIn(): boolean {
    return this.auth.isUserLoggedIn();
   }

  addToCartEvent() {
    if (this.trip.freePlaces > 0) {
      this.trip.freePlaces -= 1;
      this.trip.inCart += 1;
      this.addToCart.emit(this.trip);
    }
  }

  removeFromCartEvent() {
    if (this.trip.freePlaces < this.trip.limit) {
      this.trip.freePlaces += 1;
      this.trip.inCart -= 1;
      this.removeFromCart.emit(this.trip);
    }
  }

  deleteTripEvent() {
    this.deleteTrip.emit(this.trip);
  }

  getTextColor() {
    const freePlaces = this.trip.freePlaces;
    var color = "black";
    if (freePlaces <= 3) {
      return "red";
    }
    if (freePlaces <= 6) {
      return "orange";
    }
    return color;
  }

  ratingComponentClick(clickObj: any): void {
    this.trip.rating = clickObj.rating;
  }
}
