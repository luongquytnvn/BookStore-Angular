import {Component, OnInit} from '@angular/core';
import {IBook} from '../../admin/book/IBook';
import {BookService} from '../../admin/book/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../admin/category/category.service';
import {ICategory} from '../../admin/category/ICategory';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {
  bookListByCategory: IBook[];
  category: ICategory;

  constructor(private bookService: BookService,
              private router: Router,
              private route: ActivatedRoute,
              private categoryService: CategoryService,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param.id;
      this.categoryService.getCategory(id).subscribe(nextCategory => {
        this.category = nextCategory;
        this.bookService.getBookListByCategory(id).subscribe(next => {
          this.bookListByCategory = next;
        }, error => (console.log(error)));
      }, errorCategory => {
        console.log(errorCategory);
      });
    });
  }
}
