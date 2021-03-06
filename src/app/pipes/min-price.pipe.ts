import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from '../../app/trip';

@Pipe({
  name: 'minPrice'
})
export class MinPricePipe implements PipeTransform {

  transform(trips: Array<Trip>, minPrice: number): Array<Trip> {
    if (!minPrice) {
      return trips;
    }

    return trips.filter(item => item.price >= minPrice );
  }

}
