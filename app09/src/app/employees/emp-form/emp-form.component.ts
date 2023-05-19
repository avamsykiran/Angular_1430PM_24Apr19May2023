import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent implements OnInit {

  empForm: FormGroup;

  idFC: FormControl;
  fullNameFC: FormControl;
  designationFC: FormControl;
  dateOfJoiningFC: FormControl;
  
  deptId !:number;

  isEditing!: boolean;

  errMsg!: string;

  constructor(private empService: EmployeeService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.idFC = new FormControl(0);
    this.fullNameFC = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]);
    this.designationFC = new FormControl('', [Validators.required]);
    this.designationFC = new FormControl('', [Validators.required]);
    this.dateOfJoiningFC = new FormControl('', [Validators.required]);

    this.empForm = new FormGroup({ 
      id: this.idFC, 
      fullName: this.fullNameFC, 
      designation:this.designationFC,
      dateOfJoining:this.dateOfJoiningFC
    });
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.params["eid"];

    if (id) {
      let ob = this.empService.getById(parseInt(id));
      ob.subscribe({
        next: emp => { this.empForm.reset(emp); this.deptId=emp.deptId; this.isEditing = true; },
        error: err => { console.log(err); this.errMsg = "Unable to load data! Please try later!"; }
      });
    }else{
      this.deptId = parseInt(this.activatedRoute.snapshot.parent?.params["deptId"]);
    }
  }

  handleFormSubmit() {

    let empData = this.empForm.value;
    let emp  = { 
      id:empData.id, 
      fullName:empData.fullName,
      designation:empData.designation,
      dateOfJoining:new Date(empData.dateOfJoining),
      deptId:this.deptId
    }

    let ob = this.isEditing ? this.empService.update(emp) : this.empService.add(emp);

    ob.subscribe({
      next: emp => this.router.navigateByUrl("/emps/"+this.deptId),
      error: err => { console.log(err); this.errMsg = "Unable to save data! Please try later!"; }
    })
  }
}
