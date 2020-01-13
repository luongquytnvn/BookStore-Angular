import { Component, OnInit } from '@angular/core';
import {IPublishing} from '../IPublishing';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PublishingService} from '../publishing.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-publishing-edit',
  templateUrl: './publishing-edit.component.html',
  styleUrls: ['./publishing-edit.component.css']
})
export class PublishingEditComponent implements OnInit {
  publishing: IPublishing;
  publishingForm: FormGroup;
  message: boolean;

  constructor(
    private publishingService: PublishingService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.publishingForm = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(1) ]]
    });
    const  id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.publishingService.getPublishing(id).subscribe(
      next => {
        this.publishing = next;
        console.log(this.publishing);
        this.publishingForm.patchValue(this.publishing);
        console.log(this.publishingForm);
      },
      error => {
        console.log(error);
        this.publishing = null;
      }
    );
  }
  onSubmit() {
    if ( this.publishingForm.valid) {
      const  {value} = this.publishingForm;
      const  data = {
        ...this.publishing,
        ...value
      };
      this.publishingService.editPublishing(data).subscribe(
        next => {
          this.message = true;
          this.ngOnInit();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}
