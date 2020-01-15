import { Component, OnInit } from '@angular/core';
import {IComment} from '../IComment';
import {CommentService} from '../comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  commentList: IComment[] = [];
  contentAlert: string;
  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getCommentList().subscribe(next => (this.commentList = next),
        error => (this.contentAlert = this.contentAlert = JSON.parse(error.error).message));
  }

}
