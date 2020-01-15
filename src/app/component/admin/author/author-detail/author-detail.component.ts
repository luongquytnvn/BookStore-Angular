import { Component, OnInit } from '@angular/core';
import {IAuthor} from '../IAuthor';
import {AuthorService} from '../author.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  author: IAuthor;

  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.authorService.getAuthor(id).subscribe(
      next => {
        this.author = next ;
      },
      error => {
        console.log(error);
        this.author = null;
      }
    );
  }

}
