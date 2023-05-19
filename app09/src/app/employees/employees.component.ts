import { Component, OnInit } from '@angular/core';
import { DeptService } from '../shared/dept.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  deptName!:string;
  errMsg!: string;

  constructor(private deptService: DeptService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    let id = this.activatedRoute.snapshot.params["deptId"];

    if (id) {
      let ob = this.deptService.getById(parseInt(id));
      ob.subscribe({
        next: data => this.deptName = data.title,
        error: err => { console.log(err); this.errMsg = "Unable to load department detials ! please try later!"; }
      })
    }
  }
}
