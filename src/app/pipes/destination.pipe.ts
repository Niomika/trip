import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from '../mock-trips';

@Pipe({
  name: 'destination'
})
export class DestinationPipe implements PipeTransform {

  transform(items: Array<Trip>, destination: string): Array<Trip> {
    if (!destination) {
      return items;
    }
    return items.filter(item => item.destination.toLowerCase().includes(destination.toLowerCase()) );
  }

}
