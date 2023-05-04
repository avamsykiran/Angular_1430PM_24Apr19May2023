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
    this.depts=this.deptService.getAll();
  }

  delDept(id:number){
    this.deptService.deleteById(id);
    this.depts=this.deptService.getAll();
  }
}
