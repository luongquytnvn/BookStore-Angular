import { Component, OnInit } from '@angular/core';
import {IAuthor} from '../IAuthor';
import {AuthorService} from '../author.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-author-delete',
  templateUrl: './author-delete.component.html',
  styleUrls: ['./author-delete.component.css']
})
export class AuthorDeleteComponent implements OnInit {
  author: IAuthor;

  constructor(
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.authorService.getAuthor(id).subscribe(
      next => {
        this.author = next;
      },
      error => {
        this.author = null;
        console.log('error');
      }
    );
  }

  deleteAuthor(id) {
    console.log(id);
    this.authorService.deleteAuthor(id).subscribe(
      next => {
        this.router.navigate(['author-list']);
      }
    );
  }

}
