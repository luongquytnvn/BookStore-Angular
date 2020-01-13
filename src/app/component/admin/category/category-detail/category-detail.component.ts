import { Component, OnInit } from '@angular/core';
import {ICategory} from '../ICategory';
import {CategoryService} from '../category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  category: ICategory;
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.categoryService.getCategory(id).subscribe(next => {
      this.category = next;
      }, error => {
      console.log(error);
      this.category = null;
      }
    );
  }

}
