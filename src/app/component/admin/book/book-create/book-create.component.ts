import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../book.service';
import {IBook} from '../IBook';
import {Router} from '@angular/router';
import {IBookPicture} from '../IBookPicture';
import {BookPictureService} from '../book-picture.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup;
  useFile: any[];
  book: IBook;
  previewUrl: any[];
  message = false;
  bookPictures: any[];

  constructor(
    private bookService: BookService,
    private bookPictureService: BookPictureService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.bookForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(1)]],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.min(0)]]
    });
    this.useFile = [];
    this.previewUrl = [];
    this.bookPictures = [];
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const {value} = this.bookForm;
      this.book = value;
      console.log(this.book);
      for (const preview of this.previewUrl) {
        this.bookPictureService.createBookPicture(preview).subscribe(
          next => {
            console.log(next);
            this.bookPictures.push({
              id: next.id
            });
          }
        );
      }
    } else {
      console.log('error');
    }
    setTimeout(() => {
      this.createBook();
    }, 1000);
  }

  onSelectFile(event) {
    this.useFile = event.srcElement.files;
    console.log(this.useFile);
    this.preview();
  }

  createBook() {
    this.book.bookPictures = this.bookPictures;
    console.log(this.bookPictures);
    this.bookService.createBook(this.book).subscribe(next => {
      console.log(next);
      this.ngOnInit();
      this.message = true;
    });
  }

  preview() {
    // Show preview
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.useFile.length; i++) {
      const mimeType = this.useFile[i].type;
      if (mimeType.match(/image\/*/) == null) {
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(this.useFile[i]);
      reader.onload = event => {
        if (typeof reader.result === 'string') {
          this.previewUrl[i] = reader.result;
        }
      };
    }
    console.log(this.previewUrl);
  }
}
