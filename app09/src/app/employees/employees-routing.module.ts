import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmpsListComponent } from './emps-list/emps-list.component';
import { EmpFormComponent } from './emp-form/emp-form.component';

const routes: Routes = [
  {
    path: '', component: EmployeesComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      { path:'list',component:EmpsListComponent},
      { path:'add',component:EmpFormComponent},
      { path:'edit/:eid',component:EmpFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
