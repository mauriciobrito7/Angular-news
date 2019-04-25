
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShellComponent } from './core/shell/shell.component';
import { CoreModule } from './core/core.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule,FirestoreSettingsToken } from "@angular/fire/firestore";


@NgModule({
  declarations: [
 ],
  imports: [
    BrowserModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [ShellComponent]
})
export class AppModule { }
