import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimales'
})
export class DecimalesPipe implements PipeTransform {

  transform(value: Number, decimales?: any): any {
    return value.toFixed(decimales);
  }

}
