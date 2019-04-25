import { Injectable } from '@angular/core';
import { INews } from './interface/news';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news: INews[];
  private news$: Subject<INews[]> = new Subject<INews[]>();
  constructor() { 
    this.news = [
      { id:1, 
        title:'Laundroid, el robot de ensueño que prometía lavar, planchar y doblar la ropa está muerto, sus creadores se declaran en quiebra',
       content:`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
       A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
       bred for hunting.`, 
       author: `Mauricio Brito`, 
       date:`24-04-2019`, 
       label: `internacionales`, 
       img:[`https://material.angular.io/assets/img/examples/shiba2.jpg`], 
       video:[`cadena de texto`]
      },
      { id:2, 
        title:'Professional Best Small Mini Lavalier Lapel Omnidirectional Condenser ',
       content:`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
       A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
       bred for hunting.`, 
       author: `Ronniel`, 
       date:`24-04-2019`, 
       label: `internacionales`, 
       img:[`https://images-na.ssl-images-amazon.com/images/I/51%2BZ0yubjXL._SY355_.jpg`], 
       video:[`cadena de texto`]
      } 
    ]
  }

  filterForId(id:number): INews[]{
    return this.news.filter((product)=> product.id == id);
    /*
      return this.news.find(function(logro){
        return product.id == id;
      }):
     */
  }
  getNew(id:number): INews{
    return this.news.find((product)=> product.id == id);
    /*
      return this.news.find(function(logro){
        return product.id == id;
      }):
     */
  }
  getNews():INews[]{
    return this.news;
  }
}
