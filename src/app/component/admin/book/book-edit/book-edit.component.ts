import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {IBook} from '../IBook';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthorService} from '../../author/author.service';
import {CategoryService} from '../../category/category.service';
import {LanguageService} from '../../language/language.service';
import {PublishingService} from '../../publishing/publishing.service';
import {BookPictureService} from '../book-picture.service';
import {AppComponent} from '../../../../app.component';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup;
  useFile: any[];
  book: IBook;
  authorList: any;
  authors: any;
  categoryList: any;
  category: any;
  languageList: any;
  languages: any;
  publishingList: any;
  publishing: any;
  previewUrl: any[];
  message = false;
  bookPictures: any[];

  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
    private categoryService: CategoryService,
    private languageService: LanguageService,
    private publishingService: PublishingService,
    private bookPictureService: BookPictureService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private app: AppComponent
  ) {
  }

  ngOnInit() {
    this.app.setIsShow(true);
    this.bookForm = this.fb.group({
      id: '',
      price: ['', [Validators.required, Validators.min(0)]],
      name: ['', [Validators.required, Validators.minLength(1)]],
      amount: ['', [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required]],
      authors: [''],
    });
    this.useFile = [];
    this.previewUrl = [];
    this.bookPictures = [];
    this.authors = [];
    this.languages = [];
    this.authorService.getAuthorList().subscribe(next => this.authorList = next);
    this.publishingService.getPublishingList().subscribe(next => this.publishingList = next);
    this.categoryService.getCategoryList().subscribe(next => this.categoryList = next);
    this.languageService.getLanguageList().subscribe(next => this.languageList = next);
    this.languageService.getLanguageList().subscribe(next => this.languageList = next);
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe(
      next => {
        const book = next;
        console.log(next);
        this.bookForm.patchValue(book);
        this.authors = next.authors;
        this.languages = next.languages;
        this.category = next.category;
        this.publishing = next.publishing;
        for (const picture of next.bookPictures) {
          this.previewUrl.push(picture.src);
        }
      }, error => {
        console.log(error);
        this.book = null;
      }
    );
  }

  onSubmit() {
    if (this.bookForm.valid) {
      const {value} = this.bookForm;
      this.book = value;
      for (const preview of this.previewUrl) {
        this.bookPictureService.createBookPicture(preview).subscribe(
          next => {
            this.bookPictures.push({
              id: next
            });
          }
        );
      }
    } else {
      console.log('error');
    }
    setTimeout(() => {
      this.saveBook();
    }, 1000);
  }

  onSelectFile(event) {
    this.useFile = [];
    this.useFile = event.srcElement.files;
    this.preview();
  }

  saveBook() {
    this.book.bookPictures = this.bookPictures;
    this.book.authors = this.authors;
    this.book.languages = this.languages;
    this.book.category = this.category;
    this.book.publishing = this.publishing;
    this.bookService.editBook(this.book).subscribe(next => {
      console.log(next);
      this.ngOnInit();
      this.message = true;
    });
  }

  preview() {
    // Show preview
    // tslint:disable-next-line:prefer-for-of
    this.previewUrl = [];
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
  }

  addAuthor(id) {
    if (id != null && this.checkAuthor(id)) {
      this.authorService.getAuthor(id).subscribe(next => this.authors.push(next));
    }
  }

  checkAuthor(id) {
    for (const a of this.authors) {
      if (a.id === id) {
        return false;
      }
    }
    return true;
  }

  addCategory(id) {
    this.category = '';
    this.categoryService.getCategory(id).subscribe(next => this.category = next);
  }

  addPublishing(id) {
    this.publishing = '';
    this.publishingService.getPublishing(id).subscribe(next => this.publishing = next);
  }

  addLanguage(id) {
    if (id != null && this.checkLanguage(id)) {
      this.languageService.getLanguage(id).subscribe(next => this.languages.push(next));
    }
  }

  checkLanguage(id) {
    for (const lang of this.languages) {
      if (lang.id === id) {
        return false;
      }
    }
    return true;
  }
}
