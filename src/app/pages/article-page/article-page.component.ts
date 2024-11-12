import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Article } from '../../models/article.model';
import { ApiService } from '../../shared/api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);
  article: Observable<Article|undefined> = new Observable();

  constructor(private apiService:ApiService){}


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.article = this.apiService.getArticleById(Number(params.get('id')));
      console.log(Number(params.get('id')));
      console.log(this.article);
    });
  }
}
