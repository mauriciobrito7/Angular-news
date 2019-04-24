
import { FormsModule, ReactiveFormsModule, NgModel } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { NewsComponent } from './components/news/news.component';
import {MatCardModule} from '@angular/material/card';
import { NewContentComponent } from './components/news/new-content/new-content.component';
import { NewsService } from './services/news.service';



@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatCardModule],
  declarations: [ButtonsComponent, NewsComponent, NewContentComponent],
  exports: [ButtonsComponent, NewsComponent, NewContentComponent]
})
export class SharedModule {
  //
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [NewsService]
    };
  }
}

