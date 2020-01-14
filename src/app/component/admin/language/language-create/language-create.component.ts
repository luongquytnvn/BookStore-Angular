import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ILanguage} from '../ILanguage';
import {LanguageService} from '../language.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-language-create',
  templateUrl: './language-create.component.html',
  styleUrls: ['./language-create.component.css']
})
export class LanguageCreateComponent implements OnInit {
  languageForm: FormGroup;
  language: ILanguage;
  message: boolean;

  constructor(
    private languageService: LanguageService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.languageForm = this.fb.group({
      id: '',
      name: ['', [ Validators.required, Validators.minLength(1) ]]
    });
  }
  onSubmit() {
    if (this.languageForm.valid) {
      const {value} = this.languageForm;
      this.language = value;
      this.languageService.createLanguage(this.language).subscribe(
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
