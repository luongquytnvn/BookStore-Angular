import { Component, OnInit } from '@angular/core';
import {IPayment} from '../IPayment';
import {PaymentService} from '../payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
  paymentList: IPayment[] = [];
  content: string;
  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
    this.paymentService.getPaymentList().subscribe(next => (this.paymentList = next),
      error => (this.content = this.content = JSON.parse(error.error).message));
  }
}
