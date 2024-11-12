import { Component } from '@angular/core';
import { ArticleListComponent } from "../../components/article-list/article-list.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [ArticleListComponent]
})
export class HomePageComponent {

}
