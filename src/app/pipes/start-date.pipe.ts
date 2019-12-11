import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startDate'
})
export class StartDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
