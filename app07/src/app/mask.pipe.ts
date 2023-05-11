import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string): string {
    let result = value;

    let count = value.length/2;

    for(let i =1;i<=count;i++){
      let index = Math.floor(Math.random()*(count+1));
      result = result.substring(0,index) + "*" + result.substring(index+1,result.length);
    }

    return result;
  }

}
