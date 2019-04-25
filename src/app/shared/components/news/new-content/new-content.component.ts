import { Component, OnInit } from '@angular/core';
import { INews } from '../../../services/interface/news';

/* 
 ActivatedRoute es una clase que tambien tiene que inyectarse
*/
import { ActivatedRoute, Params } from '@angular/router';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.component.html',
  styleUrls: ['./new-content.component.scss']
})
export class NewContentComponent implements OnInit {
  new: INews;
  constructor(private newsService: NewsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params)=>{
      console.log(params);
      let id = params["id"];
      this.new = this.newsService.getNew(parseInt(id))
    })
  }

}
