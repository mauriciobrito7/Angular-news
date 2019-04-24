import { MainContentComponent } from './shell/main-content/main-content.component';
import { ShellComponent } from './shell/shell.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TopBarComponent } from './shell/top-bar/top-bar.component';
import { NewContentComponent } from '../shared/components/news/new-content/new-content.component';



/*Rutas principales de la app para cada componente principal de la aplicación */
const routes: Routes = [
  {
    path: '',
    loadChildren: './../views/home/home.module#HomeModule'
  },
  /*{
    path:'new/:id', component:NewContentComponent, pathMatch: 'full'
  }*/
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule.forRoot()
  ],
  declarations: [ShellComponent, MainContentComponent, TopBarComponent],
  exports: [ShellComponent]
})
export class CoreModule {}

