import {Component, OnInit} from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {BookService} from '../../admin/book/book.service';
import {CartComponent} from '../cart/cart.component';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {

  bookList: IBook[];
  content: string;
  page = 1;
  pageTotal: number;

  constructor(private bookService: BookService,
              private cart: CartComponent) {
  }

  ngOnInit() {
    this.bookService.getBookListByDate().subscribe(next => {
      this.bookList = next;
      this.pageTotal = Math.ceil(+this.bookList.length / 12);
      console.log(next);
    }, err =>
      (this.content = this.content = JSON.parse(err.error).message));
  }
  changePage(page) {
    switch (page) {
      case 'previous':
        if (this.page > 1) {
          this.page = this.page - 1;
        }
        break;
      case 'next':
        if (this.page < this.pageTotal) {
          this.page = this.page + 1;
        }
        break;
    }
  }
}
