import { NgModule } from '@angular/core';

import { DeptsRoutingModule } from './depts-routing.module';
import { DeptsComponent } from './depts.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DeptsComponent
  ],
  imports: [
    DeptsRoutingModule,
    SharedModule
  ]
})
export class DeptsModule { }
