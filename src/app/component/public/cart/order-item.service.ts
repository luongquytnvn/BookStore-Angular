import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  private url = `${environment.API_BOOK_STORE}/order-item`;

  constructor(private http: HttpClient) {
  }

  getOrderItemList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  findByOrderId(idOrder): Observable<any> {
    return this.http.get(this.url + '/cart/' + idOrder);
  }

  findByBook_IdAndOrder_Id(idBook, idOrder): Observable<any> {
    return this.http.get(this.url + '/cart/' + idBook + '/' + idOrder);
  }

  getOrderItem(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id);
  }

  createOrderItem(orderItem): Observable<any> {
    return this.http.post(this.url, orderItem);
  }

  editOrderItem(orderItem): Observable<any> {
    console.log(orderItem);
    return this.http.put(this.url + '/' + orderItem.id, orderItem);
  }

  deleteOrderItem(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
