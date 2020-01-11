import { Component, OnInit } from '@angular/core';
import {IBook} from '../IBook';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: IBook;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.bookService.getBook(id).subscribe(
      next => {
        this.book = next;
      },
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }

}
