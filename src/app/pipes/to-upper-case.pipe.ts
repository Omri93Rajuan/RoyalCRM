import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUpperCase',
})
export class ToUpperCasePipe implements PipeTransform {
  transform(value: string): string {
    const trimmed = value.trim();

    return (
      trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLocaleLowerCase()
    );
  }
}
