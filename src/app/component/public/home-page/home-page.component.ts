import {Component, OnInit} from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {BookService} from '../../admin/book/book.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  bookNewList: IBook[];
  constructor(private bookService: BookService) {
  }
  ngOnInit() {
    this.bookService.getBookListByDate().subscribe(next => {
      this.bookNewList = next;
      console.log(this.bookNewList);
    });
  }

  addCart(id: number) {
  }
}
