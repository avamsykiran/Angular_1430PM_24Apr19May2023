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

  @Output()
  editBtnClickEvent : EventEmitter<number>;

  constructor(){
    this.editBtnClickEvent=new EventEmitter<number>();
    this.delBtnClickEvent=new EventEmitter<number>();
  }

  handleEditBtn(){
    this.editBtnClickEvent.emit(this.dept.id);
  }

  handleDelBtn(){
    this.delBtnClickEvent.emit(this.dept.id);
  }
}
