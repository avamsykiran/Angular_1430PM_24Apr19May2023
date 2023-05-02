import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DeptsComponent } from './depts/depts.component';
import { DeptRowComponent } from './dept-row/dept-row.component';
import { DeptFormRowComponent } from './dept-form-row/dept-form-row.component';

@NgModule({
  declarations: [
    AppComponent,
    DeptsComponent,
    DeptRowComponent,
    DeptFormRowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
