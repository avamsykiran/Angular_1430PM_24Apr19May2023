import { Component, OnInit } from '@angular/core';
import { Dept } from '../models/dept';
import { DeptService } from '../services/dept.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dept-form',
  templateUrl: './dept-form.component.html',
  styleUrls: ['./dept-form.component.css']
})
export class DeptFormComponent implements OnInit {

  dept: Dept | undefined;
  isEditing!:boolean;

  constructor(private deptService: DeptService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.dept = { id: 0, title: '', hq: '' };
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params["deptId"];

    if (id) {
      this.dept = this.deptService.getById(parseInt(id));
      this.isEditing=true;
    }
  }

  handleFormSubmit() {
    if (this.dept) {
      this.isEditing ? 
        this.deptService.update(this.dept) : 
        this.deptService.add(this.dept);
      this.router.navigateByUrl("/depts");
    }
  }
}
