import {Component, OnInit} from '@angular/core';
import {IBook} from '../IBook';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AppComponent} from '../../../../app.component';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: IBook;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private app: AppComponent
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.bookService.getBook(id).subscribe(
      next => {
        this.book = next;
      },
      error => {
        this.book = null;
        console.log(error);
      }
    );
  }

  deleteBook(id) {
    console.log(id);
    this.bookService.deleteBook(id).subscribe(next => {
        this.router.navigate(['book-list']);
    });
  }
}
