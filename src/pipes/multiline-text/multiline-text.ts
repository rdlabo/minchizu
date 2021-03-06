import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multilineText',
})
export class MultilineTextPipe implements PipeTransform {
  transform(str: string) {
    let replaced = str.replace(/(\r\n|\r|\n)/g, '<br/>');
    return replaced;
  }

}
