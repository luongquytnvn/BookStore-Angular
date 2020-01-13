import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICategory} from './ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private  url = 'http://localhost:8080/api/admin/category';

  constructor(private http: HttpClient) { }

  getCategory(id: number): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.url + '/' + id);
  }

  createCategory(category: ICategory): Observable<any> {
    console.log(category);
    return this.http.post(this.url, category);
  }

  editCategory(category: ICategory): Observable<any> {
    return this.http.put(this.url + '/' + category.id, category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
