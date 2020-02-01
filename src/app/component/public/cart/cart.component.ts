import {Component, Injectable, OnInit} from '@angular/core';
import {OrderItemService} from './order-item.service';
import {OrderItem} from './OrderItem';
import {BookService} from '../../admin/book/book.service';
import {IBook} from '../../admin/book/IBook';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {Order} from './order';
import {OrderService} from './order.service';
import {Router} from '@angular/router';
import {StorageService} from '../../../user/_services/storage.service';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  message: string;
  count = 0;

  constructor() {
  }

  ngOnInit() {
  }

  showCount(count) {
    document.getElementById('countCart').innerHTML = count;
  }
}
