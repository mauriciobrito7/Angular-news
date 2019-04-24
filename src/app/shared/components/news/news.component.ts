import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() title:string;
  @Input() content:string = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
  bred for hunting.`;
  @Input() author:string = `Aqui va el autor`;
  @Input() date:string = `24-04-2019`;
  @Input() label:string = `Internacionales`;
  @Input() img:string[];
  @Input() video:string[];

  constructor() { }

  ngOnInit() {
    /*this.route.params.forEach((params: Params)=>{
      console.log(params);
      let id = params["id"];
      this.new = this.NewsService.getNew(parseInt(id))
    })*/
    

  }

}
