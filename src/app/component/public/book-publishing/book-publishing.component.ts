import { Component, OnInit } from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {BookService} from '../../admin/book/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CartComponent} from '../cart/cart.component';
import {IPublishing} from '../../admin/publishing/IPublishing';
import {PublishingService} from '../../admin/publishing/publishing.service';

@Component({
  selector: 'app-book-publishing',
  templateUrl: './book-publishing.component.html',
  styleUrls: ['./book-publishing.component.css']
})
export class BookPublishingComponent implements OnInit {

  bookListByPublishing: IBook[];
  publishing: IPublishing;

  constructor(private bookService: BookService,
              private router: Router,
              private route: ActivatedRoute,
              private publishingService: PublishingService,
              private cart: CartComponent
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param.id;
      this.publishingService.getPublishing(id).subscribe(nextPublishing => {
        this.publishing = nextPublishing;
        this.bookService.getBookListByPublishing(id).subscribe(next => {
          this.bookListByPublishing = next;
        }, error => (console.log(error)));
      }, errorPublishing => {
        console.log(errorPublishing);
      });
    });
  }
}
