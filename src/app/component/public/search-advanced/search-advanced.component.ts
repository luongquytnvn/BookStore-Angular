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
  nameSearch: string;

  constructor(private route: ActivatedRoute,
              private bookService: BookService) {
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
        const name = param.name;
        console.log(name);
        this.nameSearch = name;
        this.bookService.findAllByNameContaining(name).subscribe(
          next => {
            this.bookList = next;
            console.log(this.bookList);
          },
          error => {
            console.log(error);
            this.bookList = null;
          }
        );
      }
    );
  }
}
