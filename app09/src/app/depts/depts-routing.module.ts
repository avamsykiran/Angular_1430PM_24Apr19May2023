import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptsComponent } from './depts.component';
import { DeptFormComponent } from './dept-form/dept-form.component';

const routes: Routes = [
  { path: '', pathMatch:'full', component: DeptsComponent },
  { path: 'add',component:DeptFormComponent},
  { path: 'edit/:id',component:DeptFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeptsRoutingModule { }
