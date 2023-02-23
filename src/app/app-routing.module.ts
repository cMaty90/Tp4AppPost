import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPathComponent } from './error/error-path/error-path.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component:ErrorPathComponent
  },
  {
    path: 'posts',
    loadChildren:()=>import('./posts/posts.module').then(m=>m.PostsModule)
  },
  {
    path: '**',
    component:ErrorPathComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
