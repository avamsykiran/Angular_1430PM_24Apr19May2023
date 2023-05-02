import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dept } from '../models/dept';

@Component({
  selector: 'app-dept-row',
  templateUrl: './dept-row.component.html',
  styleUrls: ['./dept-row.component.css']
})
export class DeptRowComponent {

  @Input()
  dept!:Dept;

  @Output()
  delBtnClickEvent : EventEmitter<number>;

  constructor(){
    this.delBtnClickEvent=new EventEmitter<number>();
  }

  handleDelBtn(){
    this.delBtnClickEvent.emit(this.dept.id);
  }
}
