import {Component, OnInit} from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {BookService} from '../../admin/book/book.service';
import {CartComponent} from '../cart/cart.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  bookNewList: IBook[];
  constructor(private bookService: BookService,
              private cart: CartComponent) {
  }

  ngOnInit() {
    this.bookService.getBookListByDate().subscribe(next => {
      this.bookNewList = next;
    });
  }

  addCart(idBook) {
    console.log(idBook);
    this.cart.addCart(idBook);
  }
}
