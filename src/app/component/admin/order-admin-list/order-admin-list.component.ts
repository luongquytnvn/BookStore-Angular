import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderService} from '../../public/cart/order.service';

@Component({
  selector: 'app-order-admin-list',
  templateUrl: './order-admin-list.component.html',
  styleUrls: ['./order-admin-list.component.css']
})
export class OrderAdminListComponent implements OnInit {
  @Input() orderList;
  @Output() updateList = new EventEmitter();

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
  }

  changeToProcessing(idOrder) {
    // if (this.checkQuantity()) {
    this.orderService.changeOrderStatus(idOrder, 'processing').subscribe(next => {
      this.updateList.emit();
    }, error => {
      console.log(error);
    });
    // }
  }

  // checkQuantity() {
  //   for (const orderItem of this.orderList) {
  //     if (orderItem.book.amount < orderItem.quantity) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

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
