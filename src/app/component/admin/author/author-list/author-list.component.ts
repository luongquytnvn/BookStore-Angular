import {Component, OnInit} from '@angular/core';
import {IAuthor} from '../IAuthor';
import {AuthorService} from '../author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authorList: IAuthor[] = [];
  content: string;

  constructor(private authorService: AuthorService) {
  }

  ngOnInit() {
    this.authorService.getAuthorList().subscribe(next => {
        this.authorList = next;
        console.log(this.authorList);
      }, err =>
        (this.content = this.content = JSON.parse(err.error).message)
    );
  }

}
