import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import {OrderService} from '../../public/cart/order.service';
import {OrderItemService} from '../../public/cart/order-item.service';
import {OrderItem} from '../../public/cart/OrderItem';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-order-admin-list',
  templateUrl: './order-admin-list.component.html',
  styleUrls: ['./order-admin-list.component.css']
})
export class OrderAdminListComponent implements OnInit {
  @Input() orderList;
  @Output() updateList = new EventEmitter();
  orderItemList: OrderItem[];

  constructor(private orderService: OrderService,
              private orderItemService: OrderItemService) {
  }

  ngOnInit() {
  }

  changeToProcessing(idOrder) {
    this.orderItemService.findByOrderId(idOrder).subscribe(next => {
      this.orderItemList = next;
      if (this.checkQuantity(idOrder)) {
        this.orderService.changeOrderStatus(idOrder, 'processing').subscribe(next1 => {
          console.log(next1);
          this.updateList.emit();
        }, error1 => {
          console.log(error1);
        });
      }
    }, error => {
      console.log(error);
      return false;
    });
  }

  checkQuantity(idOrder): boolean {
    for (const orderItem of this.orderItemList) {
      if (orderItem.book.amount < orderItem.quantity) {
        return false;
      }
    }
    return true;
  }

  changeToDone(idOrder) {
    this.orderService.changeOrderStatus(idOrder, 'Done').subscribe(next => {
      this.updateList.emit();
    }, error => {
      console.log(error);
    });
  }

  changeToCancel(idOrder) {
    this.orderService.changeOrderStatus(idOrder, 'Cancel').subscribe(next => {
      this.updateList.emit();
    }, error => {
      console.log(error);
    });
  }
}
