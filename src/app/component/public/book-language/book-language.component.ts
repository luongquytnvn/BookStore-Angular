import { Component, OnInit } from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {BookService} from '../../admin/book/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CartComponent} from '../cart/cart.component';
import {LanguageService} from '../../admin/language/language.service';
import {ILanguage} from '../../admin/language/ILanguage';

@Component({
  selector: 'app-book-language',
  templateUrl: './book-language.component.html',
  styleUrls: ['./book-language.component.css']
})
export class BookLanguageComponent implements OnInit {

  bookListByLanguage: IBook[];
  language: ILanguage;

  constructor(private bookService: BookService,
              private router: Router,
              private route: ActivatedRoute,
              private languageService: LanguageService,
              private cart: CartComponent
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param.id;
      this.languageService.getLanguage(id).subscribe(nextLanguage => {
        this.language = nextLanguage;
        this.bookService.getBookListByLanguage(id).subscribe(next => {
          this.bookListByLanguage = next;
        }, error => (console.log(error)));
      }, errorLanguage => {
        console.log(errorLanguage);
      });
    });

  }

  addCart(idBook) {
    this.cart.addCart(idBook);
  }

}
