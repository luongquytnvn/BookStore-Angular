import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private url = 'http://localhost:8080/api/payment';

  constructor(private http: HttpClient) {
  }

  getPaymentList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getPayment(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  createPayment(payment): Observable<any> {
    return this.http.post(this.url, payment);
  }

  editPayment(payment): Observable<any> {
    return this.http.put(this.url + '/' + payment.id, payment);
  }

  deletePayment(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
