import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/services/news.service';
import { INews } from 'src/app/shared/services/interface/news';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //news: Array<INews>;
  private news$: Observable<INews[]> = new Observable<INews[]>();
  private news: INews[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.news = this.newsService.getNews();
    this.news$.subscribe(news =>
      this.news = news
    );

  }

}
