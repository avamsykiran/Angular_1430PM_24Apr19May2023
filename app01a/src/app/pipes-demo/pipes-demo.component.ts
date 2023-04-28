import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {

  str:string;
  num:number;
  dt:Date;

  constructor() {
    this.str="hello World! Welcome all!";
    this.num = 4.5678;
    this.dt = new Date("1947-08-15");
   }


}
