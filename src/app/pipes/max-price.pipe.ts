import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from '../mock-trips';

@Pipe({
  name: 'maxPrice'
})
export class MaxPricePipe implements PipeTransform {

  transform(trips: Array<Trip>, maxPrice: number): Array<Trip> {
    if (!maxPrice) {
      return trips;
    }

    return trips.filter(item => item.price <= maxPrice );
  }

}
