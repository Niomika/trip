import { Pipe, PipeTransform } from '@angular/core';
import { Trip } from '../trip';

@Pipe({
  name: 'startDate'
})
export class StartDatePipe implements PipeTransform {

  transform(items: Array<Trip>, dateString: string): Array<Trip> {
    if (!dateString) {
      return items;
    }

    const date = new Date(dateString);
    return items.filter(item => item.startDate > date );
  }

}
