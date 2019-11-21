import { Component, Input, OnInit } from '@angular/core';
import { Trip } from '../mock-trips'
import { TRIPS } from '../mock-trips';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  @Input() trip: Trip;
  constructor() { }

  ngOnInit() {
    console.log(this.trip)
  }
}
