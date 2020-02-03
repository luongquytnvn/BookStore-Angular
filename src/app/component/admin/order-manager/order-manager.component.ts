import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../public/cart/order.service';
import {OrderItemService} from '../../public/cart/order-item.service';
import {Order} from '../../public/cart/order';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.css']
})
export class OrderManagerComponent implements OnInit {
  orderListOrder: Order[];
  orderListProcessing: Order[];
  orderListDone: Order[];
  orderListCancel: Order[];

  constructor(private orderService: OrderService,
              private orderItemService: OrderItemService,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    this.updateList();
  }

  updateList() {
    this.orderService.getOrderList().pipe(
      map(res => res.filter((order, i) => order.status === 'order'))
    ).subscribe(orderListOrder => {
      this.orderListOrder = orderListOrder;
    });
    this.orderService.getOrderList().pipe(
      map(res => res.filter((order, i) => order.status === 'processing'))
    ).subscribe(orderListProcessing => {
      this.orderListProcessing = orderListProcessing;
    });
    this.orderService.getOrderList().pipe(
      map(res => res.filter((order, i) => order.status === 'Done'))
    ).subscribe(orderListDone => {
      this.orderListDone = orderListDone;
    });
    this.orderService.getOrderList().pipe(
      map(res => res.filter((order, i) => order.status === 'Cancel'))
    ).subscribe(orderListCancel => {
      this.orderListCancel = orderListCancel;
    });
  }
}
