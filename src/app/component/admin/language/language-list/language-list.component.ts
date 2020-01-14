import { Component, OnInit } from '@angular/core';
import {ILanguage} from '../ILanguage';
import {LanguageService} from '../language.service';

@Component({
  selector: 'app-language-list',
  templateUrl: './language-list.component.html',
  styleUrls: ['./language-list.component.css']
})
export class LanguageListComponent implements OnInit {
  languageList: ILanguage[] = [];
  content: string;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.getLanguageList().subscribe(next => {
      this.languageList = next;
      console.log(this.languageList);
    }),
      // tslint:disable-next-line:no-unused-expression
    err => {this.content = this.content = JSON.parse(err.error).message; };
  }

}
