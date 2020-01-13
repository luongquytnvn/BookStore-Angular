import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ILanguage} from './ILanguage';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private url = 'http://localhost:8080/api/admin/language';

  constructor(private http: HttpClient) { }
  getLanguageList(): Observable<ILanguage[]> {
    return this.http.get<ILanguage[]>(this.url);
  }
  getLanguage(id: number): Observable<ILanguage> {
    return this.http.get<ILanguage>(this.url + '/' + id);
  }
  createLanguage(language: ILanguage): Observable<any> {
    console.log(language);
    return this.http.post(this.url, language);
  }
  editLanguage(language: ILanguage): Observable<any> {
    return this.http.put(this.url + '/' + language.id, language);
  }
  deleteLanguage(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
