import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from './IBook';
import {IBookPicture} from './IBookPicture';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BookPictureService {
  private url = 'http://localhost:8080/api/book-picture';

  constructor(private http: HttpClient) {
  }

  getBookPictureList(): Observable<IBookPicture[]> {
    return this.http.get<IBookPicture[]>(this.url);
  }

  getBookPicture(id: number): Observable<IBookPicture> {
    return this.http.get<IBookPicture>(this.url + '/' + id);
  }

  createBookPicture(preview): Observable<any> {
    console.log(preview);
    return this.http.post(this.url, {
      src: preview
    });
  }

  editBookPicture(bookPicture: IBookPicture): Observable<any> {
    return this.http.put(this.url + '/' + bookPicture.id, bookPicture);
  }

  deleteBookPicture(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
