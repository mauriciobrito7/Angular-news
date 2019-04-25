import { Injectable } from '@angular/core';
import { INews } from './interface/news';
import { Observable, Subject } from 'rxjs';
import { AngularFirestore, DocumentReference,AngularFirestoreDocument,
  AngularFirestoreCollection } from '@angular/fire/firestore';
import { News } from '../models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private news: News[];
  private news$: Subject<News[]> = new Subject<News[]>();
  private newsObservable: Observable<News[]>;
  newsCollection: AngularFirestoreCollection<News>;
  basePath = 'news';
  constructor(private db: AngularFirestore) { 
    this.newsCollection = this.db.collection('news'); // reference
    /*método que devuelve un observable de los documentos en una colección */
    this.newsObservable = this.newsCollection.valueChanges();

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

  filterForId(id:number): News[]{
    return this.news.filter((product)=> product.id == id);
    /*
      return this.news.find(function(logro){
        return product.id == id;
      }):
     */
  }
  getNew(id:number): News{
    return this.news.find((product)=> product.id == id);
    /*
      return this.news.find(function(logro){
        return product.id == id;
      }):
     */
  }
  getNews():News[]{
    return this.news;
  }

  todoCollectionNews = 'todos';

  getTodos(): Observable<any> {
    //return this.db.collection<News>(this.todoCollectionNews, ref => ref.orderBy('lastModifiedDate', 'desc')).get();
    return this.db.collection(this.basePath).snapshotChanges();
    /*
    this.newsObservable = this.db.collection(this.basePath).snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as News;
        const id = action.payload.doc.id;
        return { id, ...data };
      });

    });*/

    //return this.newsObservable;
  }
  saveTodo(new$: News): Promise<DocumentReference> {
    return this.db.collection(this.todoCollectionNews).add(new$);
  }
  /*editTodo(new$: News): Promise<void>{
    return this.db.collection(this.todoCollectionNews).doc(new$.id).update(todo);
  }*/
  editTodoPartial(id: string, obj: Object): Promise<void>{
    return this.db.collection(this.todoCollectionNews).doc(id).update(obj);
  }
  deleteTodo(idNew$: string): Promise<void>{
    return this.db.collection(this.todoCollectionNews).doc(idNew$).delete();
  }
}
