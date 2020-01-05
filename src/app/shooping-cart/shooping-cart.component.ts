import { TripsService } from './../services/trips.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trip } from '../../app/trip';
import { ShoopingCartService } from '../services/shooping-cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shooping-cart',
  templateUrl: './shooping-cart.component.html',
  styleUrls: ['./shooping-cart.component.css']
})
export class ShoopingCartComponent implements OnInit {
  shoppingCart: Trip[] = [];
  offersInShoppingCart = 0;
  isLoaded = false;
  constructor(private tripsService: TripsService) {}

  ngOnInit() {
    this.getOffersInShoppingCart();
    this.getTrips();
  }

  getTrips(){
    this.tripsService.getTrips().subscribe(shoppingCart => {
      this.shoppingCart = shoppingCart;
      console.log(this.shoppingCart);
      this.isLoaded = true;
    });
  }

  getOffersInShoppingCart(){
    this.offersInShoppingCart = this.tripsService.getOffersInShoppingCart();
  }

  removeFromCart(trip: Trip){
    this.tripsService.removeOneTripFromCart(trip);
    this.getTrips();
  }
}
