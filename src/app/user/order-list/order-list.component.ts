import { Component, OnInit } from '@angular/core';
import {Order} from '../../component/public/cart/order';
import {OrderService} from '../../component/public/cart/order.service';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orderList: Order[];
  constructor(private orderService: OrderService,
              private token: TokenStorageService) { }

  ngOnInit() {
    this.orderService.findAllOrderByUser_Id(this.token.getUser().id).subscribe(next => {
      this.orderList = next;
    }, error => {
      console.log(error);
    });
  }

  deleteOrder(id: number) {
    this.orderService.deleteItem(id).subscribe(next => {
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }
}
