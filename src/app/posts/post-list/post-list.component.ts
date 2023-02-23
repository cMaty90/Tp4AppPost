import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostListResponse } from 'src/app/interfaces/post-list.interface';
import { PostsServiceService } from 'src/app/services/posts-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    this.showPostList();
  }

  constructor(private postService: PostsServiceService) { }

  vectorPostList: PostListResponse[] = [];
  postListUrl: string = 'https://jsonplaceholder.typicode.com/posts/';
  linkPostDetail: string = '';

  showPostList() {
    this.postService.getPostList(this.postListUrl)
      .subscribe(resp => {
        console.log(resp);
        this.vectorPostList = resp;

      })
  }

  saveLinkPostDetail(id:number) {
    this.linkPostDetail = `https://jsonplaceholder.typicode.com/posts/${id}`;
    console.log(this.linkPostDetail);
  }

  ngOnDestroy(): void {
    this.postService.linkPostDetail = this.linkPostDetail;
  }


}
