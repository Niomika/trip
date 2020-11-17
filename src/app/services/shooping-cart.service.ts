import { Injectable } from '@angular/core';
import { TestsAndBugsData } from '../TestsAndBugsData';

@Injectable({
  providedIn: 'root'
})
export class ShoopingCartService {

  shoppingCart = [];
  constructor() { }

  getTripsFromShoppingCart(): Array<TestsAndBugsData> {
    return this.shoppingCart;
  }

  addToShoppingCart(trip: TestsAndBugsData): void {
    let number = this.shoppingCart[trip.id]
    if (number) {
      number += 1;
    }
    else {
      number = 1;
    }
  }

  removeFromShoppingCart(trip: TestsAndBugsData): void {
    let number = this.shoppingCart[trip.id];

    if (number) {
      number -= 1;
    }
    else {
      number = 0;
    }
    
  }
  offersInShoppingCart(): number {
    //return +Object.values(this.shoppingCart).reduce((a, b) => +a + +b, 0);
    return this.shoppingCart.length;
  }
}
