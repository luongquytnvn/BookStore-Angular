import { Component, OnInit } from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {BookService} from '../../admin/book/book.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  bookListNew: IBook[];
  content: any;
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.bookService.getBookListByDate().subscribe(next => {
      this.bookListNew = next;
      console.log(next);
    }, err =>
      (this.content = this.content = JSON.parse(err.error).message));
  }

}
