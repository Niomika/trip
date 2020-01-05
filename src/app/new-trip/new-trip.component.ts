import { Component, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Trip } from '../../app/trip'


@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent {

  @Output() addTrip = new EventEmitter<Trip>();

  newTripForm = new FormGroup({
    name: new FormControl(''),
    destination: new FormControl(''),
    description: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    rating: new FormControl(''),
    price: new FormControl(''),
    freePlaces: new FormControl(''),
    limit: new FormControl(''),
    photo: new FormControl(''),
    inCart: new FormControl('')
  });


  onSubmit() {
    this.addTrip.emit(this.newTripForm.value);
    this.newTripForm.reset();
  }
}
