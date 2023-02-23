import { Component, Input, OnInit, Output, EventEmitter, ViewChild , ElementRef} from '@angular/core';
import { CommentsPostDetailResponse } from 'src/app/interfaces/post-list.interface';
import { PostsServiceService } from 'src/app/services/posts-service.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{

  constructor(private postService: PostsServiceService) { }


  ngOnInit(): void {
    setTimeout(() => {
      this.showComments();
    }, 900);

  }

  @Input() idPost = 0;
  vectorComments: CommentsPostDetailResponse[] = [];

  @Output() eventDate = new EventEmitter<Date>();
  @ViewChild('btnDate') btnDate!: ElementRef;

  enMayuscula: boolean = true;

  showComments() {
    let linkCommentsPostDetail = `https://jsonplaceholder.typicode.com/comments?postId=${this.idPost}`;
    this.postService.getCommentsPostDetail(linkCommentsPostDetail)
      .subscribe(resp => {
        this.vectorComments = resp;
      })
  }


  showDate() {
    let date = new Date();
    console.log(date)
    if (this.btnDate.nativeElement.click) {
      this.eventDate.emit(date);
    }
  }

  changeNameComment() {
    this.enMayuscula = !this.enMayuscula;
  }




}
