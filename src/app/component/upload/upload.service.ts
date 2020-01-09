import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private url = 'http://localhost:8080/api/admin/upload-file';

  constructor(private http: HttpClient) {
  }

  uploadFile(file: FormData): Observable<any> {
    return this.http.post(this.url, file);
  }
}
