import { Injectable } from '@angular/core';
import { Dept } from '../models/dept';

@Injectable({
  providedIn: 'root'
})
export class DeptService {

  depts:Dept[];
  nextDeptId:number;

  constructor() {
    this.depts = [
      {id:1,title:"ACCOUNTS",hq:"DELHI,INDIA"},
      {id:2,title:"OPERATIONS",hq:"VIZAG,INDIA"},
      {id:3,title:"SALES",hq:"LOS ANGELS,USA"}
    ];

    this.nextDeptId = 4;
  }

  getAll():Dept[]{
    return [...this.depts];
  }

  getById(id:number):Dept|undefined{
    return this.depts.find(d => d.id===id);
  }

  add(dept:Dept):void{
    dept.id=this.nextDeptId++;
    this.depts.push(dept);
  }

  update(dept:Dept):void{
    let index = this.depts.findIndex(d => d.id===dept.id);
    if(index>-1){
      this.depts[index]=dept;
    }
  }

  deleteById(id:number):void{
    let index = this.depts.findIndex(d => d.id===id);
    if(index>-1){
      this.depts.splice(index,1);
    }
  }
}
