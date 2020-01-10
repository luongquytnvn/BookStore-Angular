import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {IBook} from '../IBook';
import {Router} from '@angular/router';
import {UploadService} from '../../upload/upload.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  createBookForm: FormGroup;
  public useFile: any = File;
  book: IBook;
  previewUrl: any = null;

  constructor(
    private bookService: BookService,
    private uploadService: UploadService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.createBookForm = this.fb.group({
      id: '',
      name: '',
      price: '',
      picture: '',
      description: '',
      amount: ''
    });
    this.useFile = File;
  }

  saveForm() {
    if (this.createBookForm.valid) {
      const {value} = this.createBookForm;
      this.book = value;
      this.book.picture = this.previewUrl;
      this.bookService.createBook(this.book).subscribe(
        next => {
          console.log(next);
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
