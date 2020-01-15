import {Component, OnInit} from '@angular/core';
import {ICategory} from '../ICategory';
import {CategoryService} from '../category.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  category: ICategory;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.categoryService.getCategory(id).subscribe(next => {
        this.category = next;
      }, error => {
        this.category = null;
        console.log(error);
      }
    );
  }

  deleteCategory(id) {
    console.log(id);
    this.categoryService.deleteCategory(id).subscribe(next => {
      this.router.navigate(['category-list']);
    });
  }

}
