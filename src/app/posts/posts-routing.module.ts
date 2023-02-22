import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ErrorPathComponent } from '../error/error-path/error-path.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component:PostListComponent
      },
      {
        path: 'postDetail/:id',
        component:PostDetailComponent
      },
      {
        path: '**',
        component:ErrorPathComponent
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PostsRoutingModule { }
