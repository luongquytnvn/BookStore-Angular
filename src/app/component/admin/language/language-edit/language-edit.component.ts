import { Component, OnInit } from '@angular/core';
import {ILanguage} from '../ILanguage';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LanguageService} from '../language.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-language-edit',
  templateUrl: './language-edit.component.html',
  styleUrls: ['./language-edit.component.css']
})
export class LanguageEditComponent implements OnInit {
  language: ILanguage;
  languageForm: FormGroup;
  message: boolean;

  constructor(
    private languageService: LanguageService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.languageForm = this.fb.group({
      id: '',
      name: ['', [ Validators.required, Validators.minLength(1) ]]
    });
    const  id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.languageService.getLanguage(id).subscribe(
      next => {
        this.language = next;
        console.log(this.language);
        this.languageForm.patchValue(this.language);
        console.log(this.languageForm);
      },
      error => {
        console.log(error);
        this.language = null;
      }
    );
  }
  onSubmit() {
    if ( this.languageForm.valid) {
      const  {value} = this.languageForm;
      const  data = {
          ...this.language,
           ...value
      };
      this.languageService.editLanguage(data).subscribe(
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
