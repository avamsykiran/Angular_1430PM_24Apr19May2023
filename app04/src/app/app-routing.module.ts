import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DeptsComponent } from './depts/depts.component';
import { DeptFormComponent } from './dept-form/dept-form.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'/depts'},
  {path:'depts',component:DeptsComponent},
  {path:'addDept',component:DeptFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
