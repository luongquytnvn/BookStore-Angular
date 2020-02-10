import {Component, Injectable, OnInit} from '@angular/core';

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
    this.showCount(0);
  }

  showCount(count) {
    document.getElementById('countCart').innerHTML = count;
  }
}
