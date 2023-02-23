import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsRoutingModule } from './posts-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { MayusculaPipe } from './pipes/uppercase.pipe';



@NgModule({
  declarations: [
    PostListComponent,
    PostDetailComponent,
    CommentsComponent,
    MayusculaPipe
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
