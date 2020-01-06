import { TripsService } from './../services/trips.service';
import { Component, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Trip } from '../../app/trip'


@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent {

  constructor(private tripsService: TripsService){}

  newTripForm = new FormGroup({
    name: new FormControl(''),
    destination: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    rating: new FormControl('0'),
    price: new FormControl(''),
    freePlaces: new FormControl(''),
    limit: new FormControl(''),
    photo: new FormControl(''),
    inCart: new FormControl('0')
  });


  onSubmit() {
    this.newTripForm.value.freePlaces=this.newTripForm.value.limit;
    this.tripsService.addTrip(this.newTripForm.value).subscribe(res => {
      console.log(res);
      this.newTripForm.reset();
    });
  }
}
