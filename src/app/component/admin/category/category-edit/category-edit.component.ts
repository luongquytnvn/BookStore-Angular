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
      id: '',
      name: ['', [Validators.required, Validators.minLength(1)]],
    });
    const  id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.categoryService.getCategory(id).subscribe(
      next => {
        this.category = next;
        console.log(this.category);
        this.categoryForm.patchValue(this.category);
        console.log(this.categoryForm);
      },
      error => {
        console.log(error);
        this.category = null;
      }
    );
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const {value} = this.categoryForm;
      const data = {
        ...this.category,
        ...value
      };
      console.log(data)
      this.categoryService.editCategory(data).subscribe( next => {
        console.log(next);
        this.message = true;
        this.ngOnInit();
      },
        error => console.log(error)
      );
    }
  }

}
