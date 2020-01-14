import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'http://localhost:8080/api/comment';

  constructor(private http: HttpClient) {
  }

  getCommentList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getComment(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  createComment(comment): Observable<any> {
    return this.http.post(this.url, comment);
  }

  editComment(comment): Observable<any> {
    return this.http.put(this.url + '/' + comment.id, comment);
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
