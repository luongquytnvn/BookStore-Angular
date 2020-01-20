import {Injectable} from '@angular/core';
import {OrderItem} from '../../component/public/cart/OrderItem';

const ID_CART = 'idCart';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {
  }

  public remove() {
    localStorage.clear();
  }

  public saveCart(idCart) {
    localStorage.setItem(ID_CART, JSON.stringify(idCart));
  }

  public getCart() {
    return JSON.parse(localStorage.getItem(ID_CART));
  }
}
