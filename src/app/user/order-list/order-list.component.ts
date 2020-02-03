import {Component, OnInit} from '@angular/core';
import {Order} from '../../component/public/cart/order';
import {OrderService} from '../../component/public/cart/order.service';
import {TokenStorageService} from '../_services/token-storage.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orderListOrder: Order[];
  orderListDone: Order[];
  orderListProcessing: Order[];

  constructor(private orderService: OrderService,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    this.updateList();
  }

  updateList() {
    this.orderService.findAllOrderByUser_Id(this.token.getUser().id).pipe(
      map(res => res.filter((book, i) => book.status === 'order'))
    )
      .subscribe(orderListOrder => {
        this.orderListOrder = orderListOrder;
      }, error => {
        console.log(error);
      });

    this.orderService.findAllOrderByUser_Id(this.token.getUser().id).pipe(
      map(res => res.filter((book, i) => book.status === 'processing'))
    )
      .subscribe(orderListProcessing => {
        this.orderListProcessing = orderListProcessing;
      }, error => {
        console.log(error);
      });

    this.orderService.findAllOrderByUser_Id(this.token.getUser().id).pipe(
      map(res => res.filter((book, i) => book.status === 'Done'))
    )
      .subscribe(orderListDone => {
        this.orderListDone = orderListDone;
      }, error => {
        console.log(error);
      });
  }
}
