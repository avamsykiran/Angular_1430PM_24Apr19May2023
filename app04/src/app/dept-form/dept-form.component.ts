import { Component } from '@angular/core';
import { Dept } from '../models/dept';
import { DeptService } from '../services/dept.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dept-form',
  templateUrl: './dept-form.component.html',
  styleUrls: ['./dept-form.component.css']
})
export class DeptFormComponent {

  dept: Dept;

  constructor(private deptService: DeptService,private router:Router) {
    this.dept = { id: 0, title: '', hq: '' };
  }

  handleFormSubmit() {
    this.deptService.add(this.dept);
    this.router.navigateByUrl("/depts");
  }
}
