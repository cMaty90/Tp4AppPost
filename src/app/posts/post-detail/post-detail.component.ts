import { Component, OnInit } from '@angular/core';
import { PostsServiceService } from 'src/app/services/posts-service.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit{

  constructor(private postService: PostsServiceService) { }

  ngOnInit(): void {
    this.showDataPostDetail();
  }

  actualDate: Date = new Date('Mon Jan 01 00 00:00:00 GMT-0300');

  linkPostDetail: string = this.postService.linkPostDetail;

  idPost: number = 0;
  titlePost: string = '';
  bodyPost: string = '';

  showDataPostDetail() {
    this.postService.getDataPostDetail(this.linkPostDetail)
      .subscribe(resp => {
        this.idPost = resp.id;
        this.titlePost = resp.title;
        this.bodyPost = resp.body;
      })
  }

  showDate(evento: Date) {
    console.log('mi evento date');
    console.log(evento);
    this.actualDate = evento;
  }






}
