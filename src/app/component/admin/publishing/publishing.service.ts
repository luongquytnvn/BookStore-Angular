import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPublishing} from './IPublishing';

@Injectable({
  providedIn: 'root'
})
export class PublishingService {
  private url = 'http://localhost:8080/api/admin/publishing';

  constructor(private http: HttpClient) { }
  getPublishingList(): Observable<IPublishing[]> {
    return this.http.get<IPublishing[]>(this.url);
  }
  getPublishing(id: number): Observable<IPublishing> {
    return this.http.get<IPublishing>(this.url + '/' + id);
  }
  createPublishing(publishing: IPublishing): Observable<any> {
    console.log(publishing);
    return this.http.post(this.url, publishing);
  }
  editPublishing(publishing: IPublishing): Observable<any> {
    return this.http.put(this.url + '/' + publishing.id, publishing);
  }
  deletePublishing(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
