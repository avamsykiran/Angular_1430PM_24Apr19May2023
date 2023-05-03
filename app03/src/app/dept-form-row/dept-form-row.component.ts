import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dept } from '../models/dept';

@Component({
  selector: 'app-dept-form-row',
  templateUrl: './dept-form-row.component.html',
  styleUrls: ['./dept-form-row.component.css']
})
export class DeptFormRowComponent {

  @Input()
  dept:Dept;

  @Output()
  formSubmitedEvent:EventEmitter<Dept>;

  @Output()
  formResetEvent:EventEmitter<number>;

  constructor(){
    this.dept = {id:0,title:'',hq:''};
    this.formSubmitedEvent=new EventEmitter<Dept>();
    this.formResetEvent=new EventEmitter<number>();
  }

  handleSubmit(){
    this.formSubmitedEvent.emit(this.dept);
    this.dept = {id:0,title:'',hq:''};
  }

  resetForm(){
    if(this.dept.isEditable){
      this.formResetEvent.emit(this.dept.id);
    }else{
      this.dept = {id:0,title:'',hq:''};
    }
  }
}
