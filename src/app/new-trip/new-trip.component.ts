import { Component, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Trip } from '../mock-trips'


@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.css']
})
export class NewTripComponent {

  //@Output() addTripEmitter = new EventEmitter<Trip>();

  newTripForm = new FormGroup({
    name: new FormControl(''),
    destination: new FormControl(''),    
    description: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    rating: new FormControl(''),
    price: new FormControl(''),
    limit: new FormControl(''),
    imageSrc: new FormControl('')
  });

  onSubmit() {
    //this.addItemEmitter.emit(this.newTripForm.value);
    this.newTripForm.reset();
  }
}