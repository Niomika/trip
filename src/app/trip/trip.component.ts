import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { TestsAndBugsData } from "../TestsAndBugsData";
import { AuthService } from '../services/auth.service';
import { TripsService } from '../services/trips.service';

@Component({
  selector: "app-trip",
  templateUrl: "./trip.component.html",
  styleUrls: ["./trip.component.css"]
})
export class TripComponent implements OnInit {
  @Input() trip: TestsAndBugsData;  
  @Input() special: boolean;
  photo = "";

  @Output() addToCart: EventEmitter<TestsAndBugsData> = new EventEmitter<
    TestsAndBugsData
  >();
  @Output() removeFromCart: EventEmitter<TestsAndBugsData> = new EventEmitter<
    TestsAndBugsData
  >();
  @Output() deleteTrip: EventEmitter<TestsAndBugsData> = new EventEmitter<
    TestsAndBugsData
  >();

  constructor(private auth: AuthService, private tripsService: TripsService) { }

  ngOnInit() {
  }

  isUserLoggedIn(): boolean {
    return this.auth.isUserLoggedIn();
   }

  addToCartEvent() {
    
  }

  removeFromCartEvent() {

  }

  deleteTripEvent() {
    this.deleteTrip.emit(this.trip);
  }

  getTextColor() {
    
  }

  ratingComponentClick(clickObj: any): void {
         this.tripsService.updateTrip(this.trip);   
  }
}
