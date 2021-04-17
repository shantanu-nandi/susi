import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(!value) return '';

     let limit = (args && args.length > 0) ? parseInt(args[0], 10) : 90;
     let trail = (args && args.length > 1) ? args[1] : '...';
 
     return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
