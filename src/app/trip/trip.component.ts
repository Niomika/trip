import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Trip } from "../mock-trips";
import { TRIPS } from "../mock-trips";

@Component({
  selector: "app-trip",
  templateUrl: "./trip.component.html",
  styleUrls: ["./trip.component.css"]
})
export class TripComponent implements OnInit {
  @Input() trip: Trip;
  @Input() typ: string;
  photo = "assets";

  @Output() addToCart: EventEmitter<Trip> = new EventEmitter<
    Trip
  >();
  @Output() removeFromCart: EventEmitter<Trip> = new EventEmitter<
    Trip
  >();
  @Output() deleteTrip: EventEmitter<Trip> = new EventEmitter<
  Trip
>();

  constructor() {}

  ngOnInit() {
    this.photo += this.trip.photo;
    console.log(this.trip);
  }

  addToCartEvent(){
    this.addToCart.emit(this.trip);
  }

  removeFromCartEvent(){
    this.removeFromCart.emit(this.trip);
  }

  deleteTripEvent(){
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
}