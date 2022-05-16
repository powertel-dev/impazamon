
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filterSearch'
})
export class FilterSearchPipe implements PipeTransform {

  transform(value: any, filterString: string) {

    if(value.length === 0 || filterString ===''){
      return value;
    }

    const filterfaults = [];

    for(const fault  of value){
      if(fault ===filterString){
        filterfaults.push(fault);
      }
    }
    return filterfaults
    
  }

}
