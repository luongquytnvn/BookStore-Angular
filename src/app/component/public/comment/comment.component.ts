import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IComment} from '../../admin/comment/IComment';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CommentService} from '../../admin/comment/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: IComment;
  @Output() updateList = new EventEmitter();
  formEdit: FormGroup;

  constructor(public token: TokenStorageService,
              private fb: FormBuilder,
              private commentService: CommentService) {
  }

  ngOnInit() {
    this.formEdit = this.fb.group({
      editComment: this.comment.content
    });
  }

  saveComment(idComment) {
    const {value} = this.formEdit;
    console.log(value);
    this.commentService.editComment({
      id: idComment,
      content: value.editComment
    }).subscribe(next => {
      console.log(next);
      this.updateList.emit();
    }, error => {
      console.log(error);
    });
  }

  deleteComment(idComment) {
    this.commentService.deleteComment(idComment).subscribe(next => {
      console.log(next);
      this.updateList.emit();
    }, error => {
      console.log(error);
    });
  }
}
