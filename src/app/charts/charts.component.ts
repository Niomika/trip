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

  data: any;

    constructor() {
        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#4bc0c0'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#565656'
                }
            ]
        }
    }


    ngOnInit() {}

 // addItem(trip: TestsAndBugsData) {    this.tripsService.addNewTestsAndBugsData(trip).subscribe(newItem => this.trips.push(newItem));

}
