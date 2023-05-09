import { Component } from '@angular/core';
import { NumberSeriesService } from '../services/number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent {

  lb:number;
  ub:number;

  series!:number[];
  errMsg!:string|null;
  inProgress!:boolean;

  constructor(private nss:NumberSeriesService){
    this.lb=0;
    this.ub=0;
  }

  startSeries(){
    this.series=[];
    this.errMsg=null;
    this.inProgress=true;

    this.nss.generateSeries(this.lb,this.ub).subscribe({
      next: value => this.series.push(value),
      error: err => {this.errMsg=err; console.log(this.errMsg); this.inProgress=false;},
      complete: () => this.inProgress=false
    });
  }
}
