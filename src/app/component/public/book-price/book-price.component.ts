import {Component, OnInit} from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {BookService} from '../../admin/book/book.service';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-price',
  templateUrl: './book-price.component.html',
  styleUrls: ['./book-price.component.css']
})
export class BookPriceComponent implements OnInit {
  bookList: IBook[];
  page = 1;
  pageTotal: number;

  constructor(private bookService: BookService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param.id;
      console.log(id);
      switch (id) {
        case '1':
          this.priceTo100();
          break;
        case '2':
          this.price100To200();
          break;
        case '3':
          this.price200To300();
          break;
        case '4':
          this.price300Up();
          break;
        default:
          this.priceTo100();
          break;
      }
    });
  }

  priceTo100() {
    this.bookService.getBookList()
      .pipe(map(res => res.filter((book, i) => book.price < 100000).sort((a, b) => a.price < b.price ? -1 : 1)))
      .subscribe(next => {
        this.bookList = next;
        console.log(this.bookList);
        this.pageTotal = Math.ceil(+this.bookList.length / 12);
        console.log(this.pageTotal);
      }, err => {
        console.log(err);
      });
  }

  price100To200() {
    this.bookService.getBookList()
      .pipe(map(res => res.filter((book, i) => book.price < 200000 && book.price >= 100000).sort((a, b) => a.price < b.price ? -1 : 1)))
      .subscribe(next => {
        this.bookList = next;
        console.log(this.bookList);
        this.pageTotal = Math.ceil(+this.bookList.length / 12);
        console.log(this.pageTotal);
      }, err => {
        console.log(err);
      });
  }

  price200To300() {
    this.bookService.getBookList()
      .pipe(map(res => res.filter((book, i) => book.price < 300000 && book.price >= 200000).sort((a, b) => a.price < b.price ? -1 : 1)))
      .subscribe(next => {
        this.bookList = next;
        console.log(this.bookList);
        this.pageTotal = Math.ceil(+this.bookList.length / 12);
        console.log(this.pageTotal);
      }, err => {
        console.log(err);
      });
  }

  price300Up() {
    this.bookService.getBookList()
      .pipe(map(res => res.filter((book, i) => book.price >= 300000).sort((a, b) => a.price < b.price ? -1 : 1)))
      .subscribe(next => {
        this.bookList = next;
        console.log(this.bookList);
        this.pageTotal = Math.ceil(+this.bookList.length / 12);
        console.log(this.pageTotal);
      }, err => {
        console.log(err);
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
