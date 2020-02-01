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

  constructor(private bookService: BookService,
              private cart: CartComponent) {
  }

  ngOnInit() {
    this.bookService.getBookListHot().subscribe(next => {
      this.bookList = next;
    }, error => {
      console.log(error);
    });
  }

  addVoteBook(id) {
    this.bookService.addVoteBook(id).subscribe(next => {
      console.log(next);
      this.ngOnInit();
    }, error => console.log(error));
  }
}
