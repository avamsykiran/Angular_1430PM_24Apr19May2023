import { Component } from '@angular/core';
import { Dept } from '../shared/dept';
import { DeptService } from '../shared/dept.service';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent {

  depts!:Dept[];
  errMsg!:string;

  constructor(private deptService:DeptService){
    
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    let ob = this.deptService.getAll();
    ob.subscribe({
      next: data => this.depts=data,
      error: err => {console.log(err); this.errMsg="Unable to load data! please try later!";}
    })
  }

  delDept(id:number){
    let ob = this.deptService.deleteById(id);
    ob.subscribe({
      next: () => this.loadData(),
      error: err => {console.log(err); this.errMsg="Unable to delete data! please try later!";}
    })
  }
}
