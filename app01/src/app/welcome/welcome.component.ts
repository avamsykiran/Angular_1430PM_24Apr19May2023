import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  userName: string;
  logoIndex:number;
  logos:string[];
  logoWidth:number;

  isCentered:boolean;
  isBordered:boolean;

  constructor() {
    this.userName = "SomeBody";

    this.logoIndex=0;
    this.logos=[
      "assets/imgs/n1.jpg",
      "assets/imgs/n2.png",
      "assets/imgs/n3.jpg",
      "assets/imgs/n4.png",
      "assets/imgs/n5.png"
    ];
    this.logoWidth=200;
    this.isCentered=true;
    this.isBordered=true;
  }

  changeIndex(){
    ++this.logoIndex;
    if(this.logoIndex===this.logos.length){
      this.logoIndex=0;
    }
  }
}
