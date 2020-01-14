import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublishingService {

  private url = 'http://localhost:8080/api/publishing';

  constructor(private http: HttpClient) {
  }

  getPublishingList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getPublishing(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  createPublishing(publishing): Observable<any> {
    return this.http.post(this.url, publishing);
  }

  editPublishing(publishing): Observable<any> {
    return this.http.put(this.url + '/' + publishing.id, publishing);
  }

  deletePublishing(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
