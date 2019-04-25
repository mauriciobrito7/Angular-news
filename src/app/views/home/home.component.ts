import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/services/news.service';

import { Observable } from 'rxjs';
import { News } from 'src/app/shared/models/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  news: Array<any>;
  news$: Observable<News[]>;

  constructor(private newsService: NewsService) { }

  ngOnInit() {

    /*this.news$ = this.newsService.getTodos();
    this.news$.subscribe(() => {
      this.news$ = this.newsService.getTodos();
    });*/

    this.news = this.newsService.getNews();

  }

}
