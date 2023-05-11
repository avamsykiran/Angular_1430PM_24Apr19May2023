import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InWordsPipe } from './in-words.pipe';
import { MaskPipe } from './mask.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InWordsPipe,
    MaskPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
