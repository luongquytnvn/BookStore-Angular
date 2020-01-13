import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAuthor} from './IAuthor';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private url = 'http://localhost:8080/api/admin/author';

  constructor(private http: HttpClient) { }

  getAuthorList(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>(this.url);
  }
  getAuthor(id: number): Observable<IAuthor> {
    return this.http.get<IAuthor>(this.url + '/' + id);
  }
  createAuthor(author: IAuthor): Observable<any> {
    console.log(author);
    return this.http.post(this.url, author);
  }
  editAuthor(author: IAuthor): Observable<any> {
    return this.http.put(this.url + '/' + author.id, author);
  }
  deleteAuthor(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
