import { Component, OnInit } from '@angular/core';
import {ILanguage} from '../ILanguage';
import {LanguageService} from '../language.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-language-delete',
  templateUrl: './language-delete.component.html',
  styleUrls: ['./language-delete.component.css']
})
export class LanguageDeleteComponent implements OnInit {
  language: ILanguage;

  constructor(
    private languageService: LanguageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.languageService.getLanguage(id).subscribe(
      next => {
        this.language = next;
      },
      error => {
        this.language = null;
        console.log('error');
      }
    );
  }
  deleteLanguage(id) {
    console.log(id);
    this.languageService.deleteLanguage(id).subscribe(
      next => {
        this.router.navigate(['language-list']);
      }
    );
  }

}
