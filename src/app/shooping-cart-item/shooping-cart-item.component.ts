import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestsAndBugsData } from '../TestsAndBugsData';

@Component({
  selector: 'app-shooping-cart-item',
  templateUrl: './shooping-cart-item.component.html',
  styleUrls: ['./shooping-cart-item.component.css']
})
export class ShoopingCartItemComponent implements OnInit {
  @Input() trip: TestsAndBugsData;
  @Output() removeTripEmitter = new EventEmitter<TestsAndBugsData>();
  constructor() { }

  ngOnInit() {
    console.log("XD");
    console.log(this.trip);
  }

  deleteFromCart(){
    this.removeTripEmitter.emit(this.trip);
  }

}
