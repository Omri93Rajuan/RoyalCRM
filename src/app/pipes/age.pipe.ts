import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
 
  transform(age: Date): any {
    let today = new Date();
    let birthday = new Date(age);
    let newAge = today.getFullYear() - birthday.getFullYear();
    let m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) 
    {
      newAge--;
    }
    return newAge;
}}


// פיפ של גיל