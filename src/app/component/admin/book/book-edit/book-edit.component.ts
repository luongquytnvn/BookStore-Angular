import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {IBook} from '../IBook';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: IBook;
  bookForm: FormGroup;
  file: File;
  previewUrl: any;
  message = false;
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) {
  }

  ngOnInit() {
    this.bookForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      price: ['', [Validators.required, Validators.min(0)]],
      picture: ['', [Validators.required]],
      description: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.min(0)]]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.bookService.getBook(id).subscribe(
      next => {
        this.book = next;
        console.log(this.book);
        this.bookForm.patchValue(this.book);
        console.log(this.bookForm);
      },
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const {value} = this.bookForm;
      const data = {
        ...this.book,
        ...value
      };
      this.bookService.editBook(data).subscribe(
        next => {
          this.message = true;
          this.ngOnInit();
        },
        error => console.log(error)
      );
    }
  }

  onSelectFile(event) {
    this.file = event.target.files[0];
    console.log(this.file);
    this.preview();
  }
  preview() {
    // Show preview
    const mimeType = this.file.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = event => {
      this.previewUrl = reader.result;
    };
  }
}
