import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IAuthor} from '../IAuthor';
import {AuthorService} from '../author.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {
  authorForm: FormGroup;
  author: IAuthor;
  message = false;

  constructor(
    private authorService: AuthorService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.authorForm = this.fb.group({
      id: '',
      name: ['', [ Validators.required, Validators.minLength(1) ]],
      inFor: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.authorForm.valid) {
      const {value} = this.authorForm;
      this.author = value;
      this.authorService.createAuthor(this.author).subscribe(
        next => {console.log(next);
                 this.message = true;
                 this.ngOnInit();
        }
      );
    } else {
      console.log('error');
    }
  }

}
