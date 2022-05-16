import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipes'
})
export class FilterPipe implements PipeTransform {

  transform(value : any[],  faultName: string): any [] {
    
    const result: any =[];

    if(!value  || faultName===''){
      return value;
    }

    value.forEach((f:any) => {
      if(f[faultName].trim().toLowerCase()){
        result.push(f)
      }
    });
    return result;
  }

  
}
