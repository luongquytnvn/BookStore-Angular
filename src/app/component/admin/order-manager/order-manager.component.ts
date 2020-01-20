import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../public/cart/order.service';
import {OrderItemService} from '../../public/cart/order-item.service';
import {Order} from '../../public/cart/order';
import {TokenStorageService} from '../../../user/_services/token-storage.service';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.css']
})
export class OrderManagerComponent implements OnInit {
  orderList: Order[];

  constructor(private orderService: OrderService,
              private orderItemService: OrderItemService,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    this.orderService.getOrderList().subscribe(next => {
      this.orderList = next;
    });
  }

  changeToProcessing(idOrder) {
    this.orderService.changeOrderStatus(idOrder, 'processing').subscribe(next => {
      this.ngOnInit();
    });
  }

  changeToDone(idOrder) {
    this.orderService.changeOrderStatus(idOrder, 'Done').subscribe(next => {
      this.ngOnInit();
    });
  }
}
