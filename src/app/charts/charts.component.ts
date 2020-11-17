import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestsAndBugsData } from '../TestsAndBugsData';
import { TripsService } from '../services/trips.service';

@Component({
  selector: 'app-trips',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
  providers: [TripsService]
})
export class ChartsComponent implements OnInit {


    constructor() { }

    ngOnInit() {}

 // addItem(trip: TestsAndBugsData) {    this.tripsService.addNewTestsAndBugsData(trip).subscribe(newItem => this.trips.push(newItem));

}
