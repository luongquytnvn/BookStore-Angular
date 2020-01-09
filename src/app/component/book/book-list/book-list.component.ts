import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Observable} from 'rxjs';
import {IBook} from '../IBook';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: IBook[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getBookList().subscribe(next => (this.bookList = next), error => (this.bookList = []));
  }

}
