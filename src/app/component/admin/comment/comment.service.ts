import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IComment} from './IComment';
import {IBook} from '../book/IBook';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = 'http://localhost:8080/api/admin/comment';

  constructor( private http: HttpClient) { }

  getCommentList(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.url);
  }

  getComment(id: number): Observable<IComment> {
    return this.http.get<IComment>(this.url + '/' + id);
  }

  createComment(comment: IComment): Observable<any> {
    console.log(comment);
    return this.http.post(this.url, comment);
  }

  editComment(comment: IComment): Observable<any> {
    return this.http.put(this.url + '/' + comment.id, comment);
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
