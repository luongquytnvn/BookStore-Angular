import {Component, OnInit} from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {BookService} from '../../admin/book/book.service';

@Component({
  selector: 'app-book-public',
  templateUrl: './book-public.component.html',
  styleUrls: ['./book-public.component.css']
})
export class BookPublicComponent implements OnInit {
  bookList: IBook[] = [];
  content: string;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getBookList().subscribe(next =>
      (this.bookList = next), err =>
      (this.content = this.content = JSON.parse(err.error).message));
  }

}
