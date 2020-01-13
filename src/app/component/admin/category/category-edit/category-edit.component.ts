import { Component, OnInit } from '@angular/core';
import {ICategory} from '../ICategory';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../category.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  category: ICategory;
  categoryForm: FormGroup;
  file: File;
  message = false;
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      book: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const {value} = this.categoryForm;
      const data = {
        ...this.category,
        ...value
      };
      this.categoryService.editCategory(data).subscribe( next => {
        this.message = true;
        this.ngOnInit();
      },
        error => console.log(error)
      );
    }
  }

}
