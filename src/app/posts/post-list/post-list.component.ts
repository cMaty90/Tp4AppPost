import { Component, OnInit } from '@angular/core';
import { PostListResponse } from 'src/app/interfaces/post-list.interface';
import { PostsServiceService } from 'src/app/services/posts-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  ngOnInit(): void {
    this.showPostList();
  }

  constructor(private postService: PostsServiceService) { }

  vectorPostList: PostListResponse[] = [];
  postListUrl: string = 'https://jsonplaceholder.typicode.com/posts/';

  showPostList() {
    this.postService.getPostList(this.postListUrl)
      .subscribe(resp => {
        console.log(resp);
        this.vectorPostList = resp;

      })
  }


}
