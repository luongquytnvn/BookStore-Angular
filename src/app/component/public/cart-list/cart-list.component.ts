import {Component, OnInit} from '@angular/core';
import {OrderItemService} from '../cart/order-item.service';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {OrderService} from '../cart/order.service';
import {OrderItem} from '../cart/OrderItem';
import {Order} from '../cart/order';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  order: Order;
  cartList: OrderItem[];
  totalPrice = 0;

  constructor(private orderItemService: OrderItemService,
              private token: TokenStorageService,
              private orderService: OrderService,
  ) {
  }

  ngOnInit() {
    if (this.token.getToken()) {
      this.totalPrice = 0;
      this.orderService.getCart(this.token.getUser().id).subscribe(next => {
        this.order = next;
        this.orderItemService.findByOrderId(this.order.id).subscribe(next2 => {
          this.cartList = next2;
          console.log(next2);
          for (const cart of this.cartList) {
            this.totalPrice += cart.quantity * cart.book.price;
          }
          const total = this.totalPrice;
          document.getElementById('totalPrice').innerHTML = total.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
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

  onChangeQuantity(event, cart) {
    if (this.token.getToken()) {
      cart.quantity = event.target.value;
      this.orderItemService.editOrderItem({
        id: cart.id,
        quantity: cart.quantity,
        book: {id: cart.book.id},
        order: {id: cart.order.id},
      }).subscribe(next => {
        console.log(next);
        this.ngOnInit();
      });
    }
  }
}
