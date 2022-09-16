import { Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'randomNum'
})
export class RandomNumPipe implements PipeTransform {
  transform(value: number, ...args: any[]): any {
   console.log(value,args);
   if(!args.length) return Math.floor((Math.random() * value))
   if(args.length > 1)return value = 0
   if(args.length === 1) return Math.floor((Math.random() * (value - args[0]) + args[0]))
  }

}
