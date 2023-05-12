import { Component, OnInit } from '@angular/core';
import { DeptService } from '../services/dept.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dept-form',
  templateUrl: './dept-form.component.html',
  styleUrls: ['./dept-form.component.css']
})
export class DeptFormComponent implements OnInit {

  deptForm: FormGroup;

  idFC: FormControl;
  titleFC: FormControl;
  hqFC: FormControl;

  isEditing!: boolean;

  errMsg!: string;

  constructor(private deptService: DeptService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.idFC = new FormControl(0);
    this.titleFC = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]);
    this.hqFC = new FormControl('', [Validators.required]);

    this.deptForm = new FormGroup({ id: this.idFC, title: this.titleFC, hq: this.hqFC });
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params["deptId"];

    if (id) {
      let ob = this.deptService.getById(parseInt(id));
      ob.subscribe({
        next: dept => { this.deptForm.reset(dept); this.isEditing = true; },
        error: err => { console.log(err); this.errMsg = "Unable to load data! Please try later!"; }
      });
    }
  }

  handleFormSubmit() {

    let dept = this.deptForm.value;

    let ob = this.isEditing ? this.deptService.update(dept) : this.deptService.add(dept);

    ob.subscribe({
      next: dept => this.router.navigateByUrl("/depts"),
      error: err => { console.log(err); this.errMsg = "Unable to save data! Please try later!"; }
    })
  }
}
