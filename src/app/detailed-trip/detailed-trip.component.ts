import { Component, OnInit } from '@angular/core';
import { TripsService } from '../services/trips.service';
import { Trip } from '../trip';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-trip',
  templateUrl: './detailed-trip.component.html',
  styleUrls: ['./detailed-trip.component.css']
})
export class DetailedTripComponent implements OnInit {
  trip: Trip;
  isLoaded = false;
  constructor(private tripService: TripsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getTrip(params["id"]);
    });
  }

  getTrip(id): void {
    this.tripService.getTrip(id).subscribe(trip => { this.trip = trip; this.isLoaded = true; });
  }

}
