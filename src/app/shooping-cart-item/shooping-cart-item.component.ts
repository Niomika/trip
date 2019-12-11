import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trip } from '../../app/trip';

@Component({
  selector: 'app-shooping-cart-item',
  templateUrl: './shooping-cart-item.component.html',
  styleUrls: ['./shooping-cart-item.component.css']
})
export class ShoopingCartItemComponent implements OnInit {
  @Input() trip: Trip;
  @Output() removeTripEmitter = new EventEmitter<Trip>();
  constructor() { }

  ngOnInit() {
  }

  deleteFromCart(){
    this.removeTripEmitter.emit(this.trip);
  }

}
