
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShellComponent } from './core/shell/shell.component';
import { CoreModule } from './core/core.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [ShellComponent]
})
export class AppModule { }
