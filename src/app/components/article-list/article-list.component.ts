import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { ApiService } from '../../shared/api.service';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent implements OnInit {

  constructor(private http:HttpClient){}

  private articleJsonUrl = "http://localhost:3000/articles"

  ngOnInit(): void {
    this.articles =  this.http.get< Article[]>(this.articleJsonUrl).pipe(
        map(article => {
          return article;
        })
      );
  }
  
  articles:Observable<Article[]> = new Observable();

  handleLike(article: Article) {
    article.isLiked = !article.isLiked;
  }
}
