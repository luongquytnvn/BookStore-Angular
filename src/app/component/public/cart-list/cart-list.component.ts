import {Component, OnInit} from '@angular/core';
import {OrderItemService} from '../cart/order-item.service';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {OrderService} from '../cart/order.service';
import {OrderItem} from '../cart/OrderItem';
import {Order} from '../cart/order';
import {StorageService} from '../../../user/_services/storage.service';
import {AuthService} from '../../../user/_services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CartComponent} from '../cart/cart.component';
import {BookCardComponent} from '../book-card/book-card.component';
import {LoginComponent} from '../../../user/login/login.component';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  order: Order;
  cartList: OrderItem[];
  totalPrice = 0;
  cartForm: FormGroup;

  constructor(private orderItemService: OrderItemService,
              private token: TokenStorageService,
              private orderService: OrderService,
              private storage: StorageService,
              private auth: AuthService,
              private fb: FormBuilder,
              private cart: CartComponent,
              private bookCard: BookCardComponent,
              private login: LoginComponent
  ) {
  }

  ngOnInit() {
    this.updateList();
  }

  updateList() {
    this.cartForm = this.fb.group({
      id: '',
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // tslint:disable-next-line:max-line-length
      phone: ['', [Validators.required, Validators.pattern('^(0|\\+84)(\\s|\\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\\d)(\\s|\\.)?(\\d{3})(\\s|\\.)?(\\d{3})$')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(3)]],
    });
    if (this.token.getToken()) {
      this.totalPrice = 0;
      this.orderService.getCart(this.token.getUser().id).subscribe(next => {
        this.order = next;
        this.orderItemService.findByOrderId(this.order.id).subscribe(next2 => {
          this.cartList = next2;
          this.order.phone = this.order.user.phone;
          this.order.shippingAddress = this.order.user.address;
          this.cartForm.patchValue({
            id: this.order.user.id,
            username: this.order.user.username,
            password: this.order.user.password,
            email: this.order.user.email,
            phone: this.order.user.phone,
            address: this.order.user.address,
          });
          for (const cart of this.cartList) {
            this.totalPrice += cart.quantity * cart.book.price;
          }
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
      this.changeTotal();
    });
  }

  // createUser() {
  //   const {value} = this.cartForm;
  //   console.log(this.order.user);
  //   this.auth.register(value).subscribe(data => {
  //     console.log(data);
  //     if (data) {
  //       this.login.autoLogin({
  //         username: value.username,
  //         password: value.password
  //       });
  //       setTimeout(() => {
  //         if (this.token.getToken()) {
  //           this.order.user = this.token.getUser();
  //           this.createOrder();
  //         }
  //       }, 1000);
  //     }
  //   }, error => {
  //     console.log(error);
  //   });
  // }

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

  changeTotal() {
    this.totalPrice = 0;
    this.orderItemService.findByOrderId(this.order.id).subscribe(next2 => {
      this.cartList = next2;
      for (const cart of this.cartList) {
        this.totalPrice += cart.quantity * cart.book.price;
      }
    });
  }

  deleteCartItem(id: number) {
    this.orderItemService.deleteOrderItem(id).subscribe(next => {
      this.updateList();
      this.bookCard.showList();
    });
  }
}
