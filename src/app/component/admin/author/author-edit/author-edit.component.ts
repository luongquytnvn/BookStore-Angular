import { Component, OnInit } from '@angular/core';
import {IAuthor} from '../IAuthor';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthorService} from '../author.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  author: IAuthor;
  authorForm: FormGroup;
  message: boolean;

  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.authorForm = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(1) ]],
      inFor: ['', Validators.required],
      country: ['', Validators.required]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.authorService.getAuthor(id).subscribe(
      next => {
        this.author = next;
        console.log(this.author);
        this.authorForm.patchValue(this.author);
        console.log(this.authorForm);
      },
      error => {
        console.log(error);
        this.author = null;
      }
    );
  }
  onSubmit() {
    if (this.authorForm.valid) {
      const {value} = this.authorForm;
      const data = {
        ...this.author,
        ...value
      };
      this.authorService.editAuthor(data).subscribe(
        next => {
          this.message = true;
          this.ngOnInit();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}
