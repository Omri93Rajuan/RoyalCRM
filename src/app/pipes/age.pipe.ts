import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
 
  transform(value: any): number {
    const convertAge = new Date(value);
    const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
  }
}


