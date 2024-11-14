import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private articleJsonUrl = "http://localhost:3000/articles"

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get< Article[]>(this.articleJsonUrl).pipe(
      map(article => {
        return article;
      })
    );


  }

  getArticleById(id: number): Observable<Article | undefined> {
    return this.http.get<Article[]>(this.articleJsonUrl).pipe(
      map(article => article.find(article => (article.id == id))
      )
    )
  }


}
