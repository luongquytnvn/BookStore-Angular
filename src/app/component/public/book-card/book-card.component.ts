import {Component, Input, OnInit} from '@angular/core';
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

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() book: IBook;
  message: string;
  count = 0;
  order: Order;
  cart: OrderItem[];
  listStorage = [];

  constructor(private orderService: OrderService,
              private orderItemService: OrderItemService,
              private bookService: BookService,
              private token: TokenStorageService,
              private router: Router,
              private storage: StorageService,
              private cartComponent: CartComponent) {
  }

  ngOnInit() {
    if (this.token.getToken()) {
      this.orderService.getCart(this.token.getUser().id).subscribe(next => {
        this.order = next;
        this.orderItemService.findByOrderId(this.order.id).subscribe(next2 => {
          this.cart = next2;
          console.log(next2);
          this.count = this.cart.length;
          this.cartComponent.showCount(next2.length);
        });
      }, error => {
        this.orderService.createItem({
          user: {id: this.token.getUser().id}
        }).subscribe(newOrder => {
        }, errorOder => console.log(errorOder));
      });
    }
    if (this.storage.getCart()) {
      this.orderItemService.findByOrderId(this.storage.getCart()).subscribe(next => {
        this.cart = next;
        console.log((next));
        this.count = this.cart.length;
        document.getElementById('countCart').innerHTML = next.length;
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
    } else {
      this.orderItemService.findByBook_IdAndOrder_Id(idBook, this.storage.getCart()).subscribe(next => {
        console.log(next);
      }, error => {
        console.log(error);
        this.orderItemService.createOrderItem({
          book: {id: idBook},
          order: {id: this.storage.getCart()}
        }).subscribe(next1 => {
          console.log((next1));
          this.ngOnInit();
        }, error1 => {
          console.log(error1);
        });
      });
    }
  }
}
