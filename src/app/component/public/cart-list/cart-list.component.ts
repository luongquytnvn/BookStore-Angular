import {Component, OnInit} from '@angular/core';
import {OrderItemService} from '../cart/order-item.service';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {OrderService} from '../cart/order.service';
import {OrderItem} from '../cart/OrderItem';
import {Order} from '../cart/order';
import {StorageService} from '../../../user/_services/storage.service';
import {AuthService} from '../../../user/_services/auth.service';

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
              private storage: StorageService,
              private auth: AuthService
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
          this.order.phone = this.order.user.phone;
          this.order.shippingAddress = this.order.user.address;
          for (const cart of this.cartList) {
            this.totalPrice += cart.quantity * cart.book.price;
          }
          const total = this.totalPrice;
          document.getElementById('totalPrice').innerHTML = total.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
        });
      }, error => {
        console.log(error);
      });
    } else {
      console.log(this.storage.getCart());
      this.totalPrice = 0;
      this.orderService.getItem(this.storage.getCart()).subscribe(nextCart => {
        this.order = nextCart;
        this.orderItemService.findByOrderId(this.storage.getCart()).subscribe(next6 => {
          this.cartList = next6;
          this.order.phone = '';
          this.order.shippingAddress = '';
          for (const cart of this.cartList) {
            this.totalPrice += cart.quantity * cart.book.price;
          }
          const total = this.totalPrice;
          document.getElementById('totalPrice').innerHTML = total.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
        });
      }, error => {
        console.log(error);
      });
    }
  }

  onChangeQuantity(event, cart) {
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

  createUser() {
    this.auth.register({
      username: this.order.phone,
      password: '123456',
      phone: this.order.phone,
      address: this.order.shippingAddress
    }).subscribe(next => {
      console.log(next);
    }, error => {
      console.log(error);
    });
    // this.createOrder();
  }

  createOrder() {
    this.order.total = this.totalPrice;
    this.orderService.toOrder(this.order).subscribe(next => {
      console.log(next);
      if (!this.token.getToken()) {
        this.storage.remove();
      }
      window.location.reload();
    });
  }

  onChangePhone(event) {
    this.order.phone = event.target.value;
  }

  onChangeAddress(event) {
    this.order.shippingAddress = event.target.value;
  }
}
