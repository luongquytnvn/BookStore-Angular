import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private url = 'http://localhost:8080/api/language';

  constructor(private http: HttpClient) {
  }

  getLanguageList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getLanguage(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  createLanguage(language): Observable<any> {
    return this.http.post(this.url, language);
  }

  editLanguage(language): Observable<any> {
    return this.http.put(this.url + '/' + language.id, language);
  }

  deleteLanguage(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
