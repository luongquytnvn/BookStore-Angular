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
  bookHotList: IBook[];
  bookFavoriteList: IBook[];
  constructor(private bookService: BookService,
              private cart: CartComponent) {
  }

  ngOnInit() {
    this.bookService.getBookListByDate().subscribe(next => {
      this.bookNewList = next;
    }, error => this.bookNewList = []);
    this.bookService.getBookListHot().subscribe(next => {
      this.bookHotList = next;
    }, error => this.bookHotList = []);
    this.bookService.getBookList().subscribe(next => {
      this.bookFavoriteList = next;
    }, error => this.bookFavoriteList = []);
  }

  addCart(idBook) {
    this.cart.addCart(idBook);
  }
}
