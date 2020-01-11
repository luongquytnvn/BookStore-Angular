import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../book.service';
import {IBook} from '../IBook';
import {Router} from '@angular/router';
import {UploadService} from '../../../upload/upload.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup;
  public useFile: any = File;
  book: IBook;
  previewUrl: any = null;
  message = false;
  constructor(
    private bookService: BookService,
    private uploadService: UploadService,
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
    this.useFile = null;
    this.previewUrl = null;
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const {value} = this.bookForm;
      this.book = value;
      this.book.picture = this.previewUrl;
      this.bookService.createBook(this.book).subscribe(
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

  onSelectFile(event) {
    this.useFile = event.target.files[0];
    console.log(this.useFile);
    this.preview();
  }

  preview() {
    // Show preview
    const mimeType = this.useFile.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.useFile);
    reader.onload = event => {
      this.previewUrl = reader.result;
    };
  }
}
