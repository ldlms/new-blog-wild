import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Article } from '../../models/article.model';
import { ApiService } from '../../shared/api.service';
import { map, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http:HttpClient){}

  private articleJsonUrl = "http://localhost:3000/articles"


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.article = this.http.get<Article[]>(this.articleJsonUrl).pipe(
        map(article => article.find(article => (article.id == Number(params.get('id'))))
        )
      )
    });
  }
}
