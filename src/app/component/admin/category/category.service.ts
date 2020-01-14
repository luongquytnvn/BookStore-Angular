import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
<<<<<<< HEAD
import {ICategory} from './ICategory';
=======
>>>>>>> fe9b6528453dc64f74ad10c63cd0e5667f2112ad

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private  url = 'http://localhost:8080/api/admin/category';

<<<<<<< HEAD
  constructor(private http: HttpClient) { }

  getCategoryList(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.url);
  }

  getCategory(id: number): Observable<ICategory> {
    return this.http.get<ICategory>(this.url + '/' + id);
  }

  createCategory(category: ICategory): Observable<any> {
    console.log(category);
    return this.http.post(this.url, category);
  }

  editCategory(category: ICategory): Observable<any> {
=======
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
>>>>>>> fe9b6528453dc64f74ad10c63cd0e5667f2112ad
    return this.http.put(this.url + '/' + category.id, category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
