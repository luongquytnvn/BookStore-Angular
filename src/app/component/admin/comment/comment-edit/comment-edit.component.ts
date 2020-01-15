import { Component, OnInit } from '@angular/core';
import {IComment} from '../IComment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommentService} from '../comment.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit {
  comment: IComment;
  commentForm: FormGroup;
  message = false;
  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.commentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      content: ['', [Validators.required, Validators.minLength(1)]]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.commentService.getComment(id).subscribe(next => {
      this.comment = next;
      console.log(this.comment);
      this.commentForm.patchValue(this.comment);
      console.log(this.commentForm);
    },
      error => {
      console.log(error);
      this.comment = null;
      });
  }

  onSubmit() {
    if (this.commentForm.valid) {
      const {value} = this.commentForm;
      const data = {
        ...this.comment,
        ...value
      };
      this.commentService.editComment(data).subscribe(next => {
        this.message = true;
        this.ngOnInit();
      },
        error => console.log(error));
    }
  }

}
