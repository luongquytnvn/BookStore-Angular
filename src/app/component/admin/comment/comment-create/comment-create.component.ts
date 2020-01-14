import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IComment} from '../IComment';
import {CommentService} from '../comment.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  commentForm: FormGroup;
  comment: IComment;
  message = false;
  constructor(
    private commentService: CommentService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.commentForm = this.fb.group({
      id: '',
      name: ['', [Validators.required, Validators.minLength(1)]],
      content: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  onSubmit() {
    if (this.commentForm.valid) {
      const {value} = this.commentForm;
      this.comment = value;
      this.commentService.createComment(this.comment).subscribe(next => {
        console.log(next);
        this.message = true;
        this.ngOnInit();
      }
      );
    } else {
      console.log('error');
    }
  }

}
