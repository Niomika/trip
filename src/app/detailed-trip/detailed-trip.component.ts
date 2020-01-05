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

  constructor(private tripService: TripsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getTrip();
    const element = document.getElementById('detailed-trip');
    if (element) {
     const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
     window.scrollTo({top: y, behavior: 'smooth'});
    }
  }

  getTrip(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tripService.getTrip(id)    
    .subscribe(trip => this.trip = trip);
  }


}
