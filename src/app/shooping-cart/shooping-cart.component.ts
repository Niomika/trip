import { TripsService } from './../services/trips.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trip } from '../../app/trip';
import { ShoopingCartService } from '../services/shooping-cart.service';

@Component({
  selector: 'app-shooping-cart',
  templateUrl: './shooping-cart.component.html',
  styleUrls: ['./shooping-cart.component.css']
})
export class ShoopingCartComponent implements OnInit {
  shoppingCart: Trip[] = [];
  offersInShoppingCart = 0;
  constructor(private tripsService: TripsService) {}

  ngOnInit() {
    this.getOffersInShoppingCart();
    this.getTrips();
  }

  getTrips(){
    this.shoppingCart = this.tripsService.getTrips();
  }

  getOffersInShoppingCart(){
    this.offersInShoppingCart = this.tripsService.getOffersInShoppingCart();
  }

  removeFromCart(trip: Trip){
    this.tripsService.removeOneTripFromCart(trip);
    this.getTrips();
  }
}
