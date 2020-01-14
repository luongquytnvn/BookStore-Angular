import {Component, OnInit} from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {BookService} from '../../admin/book/book.service';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {
  bookListByCategory: IBook[];

  constructor(
    private bookService: BookService
  ) {
  }

  ngOnInit() {
  }

  getBookByCategory(id) {
    this.bookService.getBookListByCategory(id).subscribe(next => this.bookListByCategory = next);
  }

}
