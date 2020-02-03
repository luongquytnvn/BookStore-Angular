import {Component, OnInit} from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {BookService} from '../../admin/book/book.service';
import {CartComponent} from '../cart/cart.component';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-book-public',
  templateUrl: './book-public.component.html',
  styleUrls: ['./book-public.component.css']
})
export class BookPublicComponent implements OnInit {
  bookList: IBook[];
  content: string;
  page = 1;
  pageTotal: number;
  constructor(private bookService: BookService,
              private cart: CartComponent) {
  }

  ngOnInit() {
    this.bookService.getBookList()
      // .pipe(map(res => res.filter((book, i) => i < (+this.page * 12) && i >= (+this.page * 12 - 12))))
      .subscribe(next => {
        this.bookList = next;
        this.pageTotal = Math.ceil(+this.bookList.length / 12);
        console.log(this.pageTotal);
      }, err =>
      (this.content = this.content = JSON.parse(err.error).message));
  }

  addVoteBook(id) {
    this.bookService.addVoteBook(id).subscribe(next => {
      console.log(next);
      this.ngOnInit();
    }, error => console.log(error));
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
