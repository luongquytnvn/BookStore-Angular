import { Component, OnInit } from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {Observable} from 'rxjs';
import {BookService} from '../../admin/book/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CartComponent} from '../cart/cart.component';
import {IBookPicture} from '../../admin/book/IBookPicture';
import {CardComponent} from '../card/card.component';


@Component({
  selector: 'app-book-detail-public',
  templateUrl: './book-detail-public.component.html',
  styleUrls: ['./book-detail-public.component.css']
})
export class BookDetailPublicComponent implements OnInit {
  id: number;
  book: IBook;
  public  books: Observable<IBook[]>;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private card: CardComponent
  ) { }

  ngOnInit() {
    this.book = new class implements IBook {
      amount: number;
      authors: any[];
      bookPictures: IBookPicture[];
      category: any;
      description: string;
      id: number;
      languages: any[];
      name: string;
      dateCreate: Date;
      price: number;
      publishing: any;
    }();
    this.id = this.route.snapshot.params.id;
    this.bookService.getBook(this.id).subscribe(data => {
      this.book = data;
    }, error => console.log(error));
    this.books = this.bookService.getBookList();
  }

  addCart(id: number) {
    this.card.addCart(id);
  }
}
