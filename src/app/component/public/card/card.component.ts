import {Component, Input, OnInit} from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {OrderService} from '../cart/order.service';
import {OrderItemService} from '../cart/order-item.service';
import {BookService} from '../../admin/book/book.service';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {Router} from '@angular/router';
import {StorageService} from '../../../user/_services/storage.service';
import {CartComponent} from '../cart/cart.component';
import {Order} from '../cart/order';
import {BookCardComponent} from '../book-card/book-card.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() book: IBook;
  order: Order;
  constructor(private orderService: OrderService,
              private orderItemService: OrderItemService,
              private bookService: BookService,
              private token: TokenStorageService,
              private router: Router,
              private storage: StorageService,
              private bookCardComponent: BookCardComponent) { }

  ngOnInit() {
  }
  addCart(idBook) {
    if (this.token.getToken()) {
      this.orderService.getCart(this.token.getUser().id).subscribe(next => {
        this.order = next;
        this.orderItemService.findByBook_IdAndOrder_Id(idBook, this.order.id).subscribe(next1 => {
          this.increaseQuantity(next1);
        }, error => {
          this.orderItemService.createOrderItem({
            book: {id: idBook},
            order: {id: this.order.id}
          }).subscribe(next2 => {
            this.bookCardComponent.showList();
          }, error2 => {
            console.log(error2);
          });
        });
      }, error1 => {
        console.log(error1);
      });
    } else {
      this.orderItemService.findByBook_IdAndOrder_Id(idBook, this.storage.getCart()).subscribe(next => {
        this.increaseQuantity(next);
      }, error => {
        console.log(error);
        this.orderItemService.createOrderItem({
          book: {id: idBook},
          order: {id: this.storage.getCart()}
        }).subscribe(next1 => {
          this.bookCardComponent.showList();
        }, error1 => {
          console.log(error1);
        });
      });
    }
  }
  increaseQuantity(cart) {
    const quantity: number = +cart.quantity + 1;
    console.log(quantity);
    this.orderItemService.editOrderItem({
      id: cart.id,
      quantity: +quantity,
      book: {id: cart.book.id},
      order: {id: cart.order.id},
    }).subscribe(next => {
      console.log(next);
    });
  }
}
