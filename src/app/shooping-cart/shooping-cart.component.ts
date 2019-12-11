import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Trip } from '../mock-trips';
import { ShoopingCartService } from '../shooping-cart.service';

@Component({
  selector: 'app-shooping-cart',
  templateUrl: './shooping-cart.component.html',
  styleUrls: ['./shooping-cart.component.css']
})
export class ShoopingCartComponent implements OnInit {

  @Input() trip: Trip;
  @Output() removeTripEmitter = new EventEmitter<Trip>();

  constructor(private shoppingCartService: ShoopingCartService) {}

  ngOnInit() {
  }

  getTripsFromShoppingCart(): Set<Trip> {
    return new Set(this.shoppingCartService.getTripsFromShoppingCart());
  }

  addToShoppingCart(): void {
      this.shoppingCartService.addToShoppingCart(this.trip);
  }
  removeFromShoppingCart(): void {
      this.shoppingCartService.removeFromShoppingCart(this.trip);
  }

  offersInShoppingCart(): number {
    return this.shoppingCartService.offersInShoppingCart();
  }
}
