import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from '../book/IBook';
import {IAuthor} from './IAuthor';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private url = `${environment.API_BOOK_STORE}/author`;

  constructor(private http: HttpClient) {
  }

  getAuthorList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getAuthor(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  createAuthor(author): Observable<any> {
    return this.http.post(this.url, author);
  }

  editAuthor(author): Observable<any> {
    return this.http.put(this.url + '/' + author.id, author);
  }

  deleteAuthor(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }

  findAllByNameContaining(name: string): Observable<IAuthor[]> {
    return this.http.post<IAuthor[]>(this.url + '/findAllByName', name);
  }
}
