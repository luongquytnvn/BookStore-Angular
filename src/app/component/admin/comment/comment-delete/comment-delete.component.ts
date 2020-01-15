import { Component, OnInit } from '@angular/core';
import {IComment} from '../IComment';
import {CommentService} from '../comment.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-comment-delete',
  templateUrl: './comment-delete.component.html',
  styleUrls: ['./comment-delete.component.css']
})
export class CommentDeleteComponent implements OnInit {
  comment: IComment;
  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.commentService.getComment(id).subscribe(next => {
      this.comment = next;
    },
      error => {
      this.comment = null;
      console.log(error);
      });
  }

  deleteComment(id) {
    console.log(id);
    this.commentService.deleteComment(id).subscribe( next => {
      this.router.navigate(['comment-list']);
    });
  }

}
