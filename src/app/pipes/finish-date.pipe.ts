import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'finishDate'
})
export class FinishDatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
