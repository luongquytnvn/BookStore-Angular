import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../component/public/cart/order';

@Component({
  selector: 'app-user-order-list',
  templateUrl: './user-order-list.component.html',
  styleUrls: ['./user-order-list.component.css']
})
export class UserOrderListComponent implements OnInit {
  @Input() orderList: Order[];
  constructor() { }

  ngOnInit() {
  }

}
