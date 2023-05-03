import { Component } from '@angular/core';
import { Dept } from '../models/dept';
import { DeptService } from '../services/dept.service';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent {

  depts:Dept[];

  constructor(private deptService:DeptService){
    this.depts=deptService.getAll();
  }

  addDept(dept:Dept){
    this.deptService.add(dept);
    this.depts=this.deptService.getAll();
  }

  delDept(id:number){
    this.deptService.deleteById(id);
    this.depts=this.deptService.getAll();
  }

  markEditable(id:number){
    let index = this.depts.findIndex(d => d.id===id);
    if(index>-1){
      this.depts[index].isEditable=true;
    }
  }
  
  unmarkEditable(id:number){
    let index = this.depts.findIndex(d => d.id===id);
    if(index>-1){
      this.depts[index].isEditable=undefined;
    }
  }

  updateDept(dept:Dept){
    dept.isEditable=undefined;
    this.deptService.update(dept);
    this.depts=this.deptService.getAll();
  }
}
