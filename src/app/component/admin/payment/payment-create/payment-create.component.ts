import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {IPayment} from '../IPayment';
import {PaymentService} from '../payment.service';

@Component({
  selector: 'app-payment-create',
  templateUrl: './payment-create.component.html',
  styleUrls: ['./payment-create.component.css']
})
export class PaymentCreateComponent implements OnInit {
  paymentForm: FormGroup;
  payment: IPayment;
  message = false;
  constructor(
    private paymentService: PaymentService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.paymentForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      const {value} = this.paymentForm;
      this.payment = value;
      this.paymentService.createPayment(this.payment).subscribe(
        next => {
          console.log(next);
          this.message = true;
          this.ngOnInit();
        }
      );
    } else {
      console.log('error');
    }
  }

}
