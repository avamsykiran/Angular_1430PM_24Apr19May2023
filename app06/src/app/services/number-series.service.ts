import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  constructor() { }

  generateSeries(lb:number,ub:number) : Observable<number> {
    const generateSeriesJob = (observer:Observer<number>) => {

      if(lb>ub){
        observer.error("Invalid boundaries received! Series Aborted!")
        return;
      }

      let n:number = lb;

      let handle = setInterval(()=>{
        observer.next(n);
        n++;
        if(n>ub){
          clearInterval(handle);
          observer.complete();
        }
      },1000);
    };

    return new Observable<number>(generateSeriesJob);
  }
}
