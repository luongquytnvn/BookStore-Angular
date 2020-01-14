import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
<<<<<<< HEAD
import {IComment} from './IComment';
import {IBook} from '../book/IBook';
=======
>>>>>>> fe9b6528453dc64f74ad10c63cd0e5667f2112ad

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = 'http://localhost:8080/api/admin/comment';

<<<<<<< HEAD
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
=======
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
>>>>>>> fe9b6528453dc64f74ad10c63cd0e5667f2112ad
    return this.http.put(this.url + '/' + comment.id, comment);
  }

  deleteComment(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
