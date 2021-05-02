import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yen'
})
export class YenPipe implements PipeTransform {

  transform(value: number): any {
    return (value*0.0088);
  }

}
