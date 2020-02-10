import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../../public/cart/order.service';
import {Order} from '../../public/cart/order';
import {OrderItemService} from '../../public/cart/order-item.service';
import {OrderAdminListComponent} from '../order-admin-list/order-admin-list.component';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order: Order;

  constructor(private route: ActivatedRoute,
              private orderService: OrderService,
              private orderItemService: OrderItemService,
              private orderAdminList: OrderAdminListComponent) {
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param.id;
      this.orderService.getItem(id).subscribe(next => {
        this.order = next;
        this.orderItemService.findByOrderId(this.order.id).subscribe(nextOI => {
          this.order.orderItems = nextOI;
          console.log(this.order);
        }, errorOI => {
          console.log(errorOI);
        });
      }, error => {
        console.log(error);
      });
    });
  }
  //
  // changeToProcessing(id: number) {
  //   this.orderAdminList.changeToProcessing(id);
  //   this.ngOnInit();
  // }
  //
  // changeToDone(id: number) {
  //   this.orderAdminList.changeToDone(id);
  //   this.ngOnInit();
  // }
  //
  // changeToCancel(id: number) {
  //   this.orderAdminList.changeToCancel(id);
  //   this.ngOnInit();
  // }
}
