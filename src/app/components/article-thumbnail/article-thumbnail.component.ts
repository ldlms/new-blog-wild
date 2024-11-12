import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-article-thumbnail',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './article-thumbnail.component.html',
  styleUrl: './article-thumbnail.component.scss'
})
export class ArticleThumbnailComponent implements OnInit {
  ngOnInit(): void {
  }
  @Input() article!: Article;
  @Output() notifyLike = new EventEmitter<Article>();


  sendNotification() {
    this.notifyLike.emit(this.article);
  }
}
