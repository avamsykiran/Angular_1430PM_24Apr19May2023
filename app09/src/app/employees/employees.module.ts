import { NgModule } from '@angular/core';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    EmployeesRoutingModule,
    SharedModule
  ]
})
export class EmployeesModule { }
