import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostListResponse } from '../interfaces/post-list.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  constructor(private http: HttpClient) { }

  getPostList(url: string): Observable<PostListResponse[]>{
    return this.http.get<PostListResponse[]>(url)
  }
}
