import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestsAndBugsData } from '../TestsAndBugsData';
import { TripsService } from '../services/trips.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css'],
  providers: [TripsService]
})
export class TripsComponent implements OnInit {

  dataSource: any;
  constructor() {
    this.dataSource = {
      labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
      datasets: [
        {
          label: "Company1",
          backgroundColor: "blue",
          data: [25, 30, 60, 50, 80, 90]
        },
        {
          label: "Company2",
          backgroundColor: "green",
          data: [45, 33, 70, 72, 95]
        }
      ]
    };
  }

  ngOnInit() {}

 // addItem(trip: TestsAndBugsData) {    this.tripsService.addNewTestsAndBugsData(trip).subscribe(newItem => this.trips.push(newItem));

}
