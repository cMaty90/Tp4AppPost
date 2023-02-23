import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentsPostDetailResponse, PostListResponse } from '../interfaces/post-list.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  constructor(private http: HttpClient) { }

  linkPostDetail: string = '';

  getPostList(url: string): Observable<PostListResponse[]>{
    return this.http.get<PostListResponse[]>(url)
  }

  getDataPostDetail(url: string): Observable<PostListResponse>{
    return this.http.get<PostListResponse>(url)
  }

  getCommentsPostDetail(url: string): Observable<CommentsPostDetailResponse[]>{
    return this.http.get<CommentsPostDetailResponse[]>(url)
  }

}
