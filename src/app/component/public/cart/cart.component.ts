import {Component, Injectable, OnInit} from '@angular/core';
import {OrderItemService} from './order-item.service';
import {OrderItem} from './OrderItem';
import {BookService} from '../../admin/book/book.service';
import {IBook} from '../../admin/book/IBook';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {Order} from './order';
import {OrderService} from './order.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  message: string;
  book: IBook;
  count = 0;
  order: Order;
  cart: OrderItem[];

  constructor(private orderService: OrderService,
              private orderItemService: OrderItemService,
              private bookService: BookService,
              private token: TokenStorageService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.token.getToken()) {
      this.orderService.getCart(this.token.getUser().id).subscribe(next => {
        this.order = next;
        this.orderItemService.findByOrderId(this.order.id).subscribe(next2 => {
          this.cart = next2;
          console.log(next2);
          this.count = this.cart.length;
          console.log(this.count);
          document.getElementById('countCart').innerHTML = next2.length;
        });
      }, error => {
        this.orderService.createItem({
          user: {id: this.token.getUser().id}
        }).subscribe(newOrder => {
          console.log(newOrder);
        }, errorOder => console.log(errorOder));
      });

    }
  }

  addCart(idBook) {
    if (this.token.getToken()) {
      this.orderService.getCart(this.token.getUser().id).subscribe(next => {
        this.order = next;
        this.orderItemService.findByBook_IdAndOrder_Id(idBook, this.order.id).subscribe(next1 => {
          console.log(next1);
        }, error => {
          console.log(error);
          this.orderItemService.createOrderItem({
            book: {id: idBook},
            order: {id: this.order.id}
          }).subscribe(next2 => {
            console.log(next2);
            this.ngOnInit();
          }, error2 => {
            console.log(error2);
          });
        });
      }, error1 => {
        console.log(error1);
      });
    }
  }
}
