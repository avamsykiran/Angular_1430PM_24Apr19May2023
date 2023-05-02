import { Component, EventEmitter, Output } from '@angular/core';
import { Dept } from '../models/dept';

@Component({
  selector: 'app-dept-form-row',
  templateUrl: './dept-form-row.component.html',
  styleUrls: ['./dept-form-row.component.css']
})
export class DeptFormRowComponent {

  dept:Dept;

  @Output()
  formSubmitedEvent:EventEmitter<Dept>;

  constructor(){
    this.dept = {id:0,title:'',hq:''};
    this.formSubmitedEvent=new EventEmitter<Dept>();
  }

  handleSubmit(){
    this.formSubmitedEvent.emit(this.dept);
    this.dept = {id:0,title:'',hq:''};
  }

  resetForm(){
    this.dept = {id:0,title:'',hq:''};
  }
}
