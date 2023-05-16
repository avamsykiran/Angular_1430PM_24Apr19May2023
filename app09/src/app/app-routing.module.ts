import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'',pathMatch:'full',redirectTo:"/depts"},
  { path: 'depts', loadChildren: () => import('./depts/depts.module').then(m => m.DeptsModule) }, 
  { path: 'emps', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
