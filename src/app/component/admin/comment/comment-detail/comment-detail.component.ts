import { Component, OnInit } from '@angular/core';
import {IComment} from '../IComment';
import {CommentService} from '../comment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {
  comment: IComment;
  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.commentService.getComment(id).subscribe(next => {
      this.comment = next;
    },
      error => {
      console.log(error);
      this.comment = null;
      });
  }

}
