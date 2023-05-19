import { NgModule } from '@angular/core';

import { DeptsRoutingModule } from './depts-routing.module';
import { DeptsComponent } from './depts.component';
import { SharedModule } from '../shared/shared.module';
import { DeptFormComponent } from './dept-form/dept-form.component';

@NgModule({
  declarations: [
    DeptsComponent,
    DeptFormComponent
  ],
  imports: [
    DeptsRoutingModule,
    SharedModule
  ]
})
export class DeptsModule { }
