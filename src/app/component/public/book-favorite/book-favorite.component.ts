import { Component, OnInit } from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {BookService} from '../../admin/book/book.service';
import {CartComponent} from '../cart/cart.component';

@Component({
  selector: 'app-book-favorite',
  templateUrl: './book-favorite.component.html',
  styleUrls: ['./book-favorite.component.css']
})
export class BookFavoriteComponent implements OnInit {

  bookList: IBook[] = [];
  content: string;

  constructor(private bookService: BookService,
              private cart: CartComponent) {
  }

  ngOnInit() {
    this.bookService.getBookList().subscribe(next => {
      this.bookList = next;
    }, err =>
      (this.content = this.content = JSON.parse(err.error).message));
  }

  addVoteBook(id) {
    this.bookService.addVoteBook(id).subscribe(next => {
      console.log(next);
      this.ngOnInit();
    }, error => console.log(error));
  }


  addCart(idBook) {
    this.cart.addCart(idBook);
  }
}
