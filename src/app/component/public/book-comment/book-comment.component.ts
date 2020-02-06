import {Component, Input, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommentService} from '../../admin/comment/comment.service';
import {IBook} from '../../admin/book/IBook';
import {IComment} from '../../admin/comment/IComment';
import {User} from '../../../user/user';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-book-comment',
  templateUrl: './book-comment.component.html',
  styleUrls: ['./book-comment.component.css']
})
export class BookCommentComponent implements OnInit {
  formComment: FormGroup;
  commentList: IComment[];
  @Input() book: IBook;

  constructor(private token: TokenStorageService,
              private fb: FormBuilder,
              private commentService: CommentService) {
  }

  ngOnInit() {
    this.formComment = this.fb.group({
      content: ['', Validators.required]
    });
    this.updateCommentList();
  }

  updateCommentList() {
    this.commentService.findAllByBook_Id(this.book.id)
      .pipe(map(res => res.sort((a, b) => a.date < b.date ? 1 : -1)))
      .subscribe(next => {
      console.log(next);
      this.commentList = next;
    }, error => {
      console.log(error);
    });
  }

  onSubmit() {
    if (this.token.getToken()) {
      const {value} = this.formComment;
      this.commentService.createComment({
        content: value.content,
        book: {id: this.book.id},
        user: {id: this.token.getUser().id},
      }).subscribe(next => {
        console.log(next);
        this.ngOnInit();
      }, error => {
        console.log(error);
      });
    }
  }
}
