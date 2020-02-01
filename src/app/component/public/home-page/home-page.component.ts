import {Component, OnInit} from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {BookService} from '../../admin/book/book.service';
import {CartComponent} from '../cart/cart.component';
import {map} from 'rxjs/operators';

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
    this.bookService.getBookListByDate().pipe(
      map(res => res.filter((book, i) => i < 4))
    ).subscribe(next => {
      this.bookNewList = next;
    }, error => this.bookNewList = []);
    this.bookService.getBookListHot().pipe(
      map(res => res.filter((book, i) => i < 4))
    ).subscribe(next => {
      this.bookHotList = next;
    }, error => this.bookHotList = []);
    this.bookService.getBookList().pipe(
      map(res => res.filter((book, i) => i < 4))
    ).subscribe(next => {
      this.bookFavoriteList = next;
    }, error => this.bookFavoriteList = []);
  }
}
