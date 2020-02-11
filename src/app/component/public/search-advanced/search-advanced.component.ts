import {Component, OnInit} from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../admin/book/book.service';

@Component({
  selector: 'app-search-advanced',
  templateUrl: './search-advanced.component.html',
  styleUrls: ['./search-advanced.component.css']
})
export class SearchAdvancedComponent implements OnInit {
  bookList: IBook[];
  nameSearch: '';

  constructor(private route: ActivatedRoute,
              private bookService: BookService) {
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
        this.nameSearch = param.name;
        if (this.nameSearch === '') {
          this.bookService.getBookList().subscribe(
            next => {
              this.bookList = next;
            },
            error => {
              console.log(error);
              this.bookList = [];
            }
          );
        } else {
          this.bookService.findAllByNameContaining(this.nameSearch).subscribe(
            next => {
              this.bookList = next;
            },
            error => {
              console.log(error);
              this.bookList = [];
            }
          );
        }
      }
    );
  }
}
