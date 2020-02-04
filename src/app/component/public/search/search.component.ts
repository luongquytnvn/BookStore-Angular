import {Component, OnInit} from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {BookService} from '../../admin/book/book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchList: IBook[];
  nameSearch: '';

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  searchBook(event) {
    this.nameSearch = event.value;
    this.bookService.findAllByNameContaining(event.value).subscribe(next => {
      this.searchList = next;
    }, error => {
      this.searchList = [];
      console.log(error);
    });
  }
}

