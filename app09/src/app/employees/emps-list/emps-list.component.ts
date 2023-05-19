import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/shared/employee';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-emps-list',
  templateUrl: './emps-list.component.html',
  styleUrls: ['./emps-list.component.css']
})
export class EmpsListComponent implements OnInit {

  deptId!:number;
  emps!:Employee[]
  errMsg!:string;

  constructor(private empService:EmployeeService,private activatedRoute:ActivatedRoute){
    
  }

  ngOnInit(): void {
    this.deptId = parseInt(this.activatedRoute.snapshot.parent?.params["deptId"]);
    console.log(this.deptId);
    this.loadData();
  }

  loadData(){
    let ob = this.empService.getAllByDeptId(this.deptId);
    ob.subscribe({
      next: data => this.emps=data,
      error: err => {console.log(err); this.errMsg="Unable to load data! please try later!";}
    })
  }

  delEmp(id:number){
    let ob = this.empService.deleteById(id);
    ob.subscribe({
      next: () => this.loadData(),
      error: err => {console.log(err); this.errMsg="Unable to delete data! please try later!";}
    })
  }
}
