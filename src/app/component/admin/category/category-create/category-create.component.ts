import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ICategory} from '../ICategory';
import {CategoryService} from '../category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  categoryForm: FormGroup;
  public  useFile: any = File;
  category: ICategory;
  previewUrl: any = null;
  message = false;
  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoryForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(1)]],
    });
    this.useFile = null;
    this.previewUrl = null;
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const {value} = this.categoryForm;
      this.category = value;
      this.categoryService.createCategory(this.category).subscribe(
        next => {
          console.log(next);
          this.message = true;
          this.ngOnInit();
        }
      );
    } else {
      console.log('error');
    }
  }

}
