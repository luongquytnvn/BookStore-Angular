import {Component, OnInit} from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {BookService} from '../../admin/book/book.service';
import {CartComponent} from '../cart/cart.component';

@Component({
  selector: 'app-book-hot',
  templateUrl: './book-hot.component.html',
  styleUrls: ['./book-hot.component.css']
})
export class BookHotComponent implements OnInit {

  bookList: IBook[] = [];
  content: string;
  page = 1;
  pageTotal: number;

  constructor(private bookService: BookService,
              private cart: CartComponent) {
  }

  ngOnInit() {
    this.bookService.getBookListHot().subscribe(next => {
      this.bookList = next;
      this.pageTotal = Math.ceil(+this.bookList.length / 12);
    }, error => {
      console.log(error);
    });
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
