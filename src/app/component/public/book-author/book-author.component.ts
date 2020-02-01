import { Component, OnInit } from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {ICategory} from '../../admin/category/ICategory';
import {BookService} from '../../admin/book/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../admin/category/category.service';
import {CartComponent} from '../cart/cart.component';
import {IAuthor} from '../../admin/author/IAuthor';
import {AuthorService} from '../../admin/author/author.service';

@Component({
  selector: 'app-book-author',
  templateUrl: './book-author.component.html',
  styleUrls: ['./book-author.component.css']
})
export class BookAuthorComponent implements OnInit {
  bookListByAuthor: IBook[];
  author: IAuthor;

  constructor(private bookService: BookService,
              private router: Router,
              private route: ActivatedRoute,
              private authorService: AuthorService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param.id;
      this.authorService.getAuthor(id).subscribe(nextAuthor => {
        this.author = nextAuthor;
        this.bookService.getBookListByAuthor(id).subscribe(next => {
          this.bookListByAuthor = next;
        }, error => (console.log(error)));
      }, errorAuthor => {
        console.log(errorAuthor);
      });
    });

  }
}
