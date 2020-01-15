import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = 'http://localhost:8080/api/category';

  constructor(private http: HttpClient) {
  }

  getCategoryList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getCategory(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  createCategory(category): Observable<any> {
    return this.http.post(this.url, category);
  }

  editCategory(category): Observable<any> {
    return this.http.put(this.url + '/' + category.id, category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
