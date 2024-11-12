import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { ApiService } from '../../shared/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent implements OnInit {

  constructor(private apiService:ApiService){}

  ngOnInit(): void {
    this.articles = this.apiService.getArticle();
  }
  
  articles:Observable<Article[]> = new Observable();

  handleLike(article: Article) {
    article.isLiked = !article.isLiked;
  }
}
