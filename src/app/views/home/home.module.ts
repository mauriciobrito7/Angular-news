import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewContentComponent } from 'src/app/shared/components/news/new-content/new-content.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'new/:id', 
    component:NewContentComponent, pathMatch: 'full'
  }

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule.forRoot(),
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
