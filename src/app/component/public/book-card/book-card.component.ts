import {Component, Injectable, Input, OnInit} from '@angular/core';
import {CartComponent} from '../cart/cart.component';
import {IBook} from '../../admin/book/IBook';
import {Order} from '../cart/order';
import {OrderItem} from '../cart/OrderItem';
import {OrderService} from '../cart/order.service';
import {OrderItemService} from '../cart/order-item.service';
import {BookService} from '../../admin/book/book.service';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {Router} from '@angular/router';
import {StorageService} from '../../../user/_services/storage.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  message: string;
  count = 0;
  order: Order;
  cart: OrderItem[];

  constructor(private orderService: OrderService,
              private orderItemService: OrderItemService,
              private bookService: BookService,
              private token: TokenStorageService,
              private router: Router,
              private storage: StorageService,
              private cartComponent: CartComponent) {
    this.showList();
  }

  ngOnInit() {
  }

  showList() {
    if (this.token.getToken()) {
      this.orderService.getCart(this.token.getUser().id).subscribe(next => {
        this.order = next;
        this.orderItemService.findByOrderId(this.order.id).subscribe(next2 => {
          this.cart = next2;
          this.count = this.cart.length;
          console.log(next2.length);
          this.cartComponent.showCount(next2.length);
        });
      }, error => {
        this.orderService.createItem({
          user: {id: this.token.getUser().id}
        }).subscribe(newOrder => {
        }, errorOder => console.log(errorOder));
      });
    } else {
      if (this.storage.getCart()) {
        this.orderItemService.findByOrderId(this.storage.getCart()).subscribe(next => {
          this.cart = next;
          this.count = this.cart.length;
          this.cartComponent.showCount(next.length);
        }, error => {
          console.log(error);
        });
      } else {
        this.orderService.createItem({}).subscribe(newOrder => {
          console.log(newOrder);
          this.storage.saveCart(newOrder);
        }, errorOrder => {
          console.log(errorOrder);
        });
      }
    }
  }
}
