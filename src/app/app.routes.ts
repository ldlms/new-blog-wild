import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { ArticleListComponent } from './components/article-list/article-list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path:'articles',
    component:ArticleListComponent,
  },
  {
    path: 'articles/:id',
    component: ArticlePageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'signup',
    component: SignupPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  },
];