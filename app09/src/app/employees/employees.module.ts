import { NgModule } from '@angular/core';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { SharedModule } from '../shared/shared.module';
import { EmpFormComponent } from './emp-form/emp-form.component';
import { EmpsListComponent } from './emps-list/emps-list.component';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmpFormComponent,
    EmpsListComponent
  ],
  imports: [
    EmployeesRoutingModule,
    SharedModule
  ]
})
export class EmployeesModule { }
