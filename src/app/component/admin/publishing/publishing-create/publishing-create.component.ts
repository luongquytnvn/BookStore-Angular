import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IPublishing} from '../IPublishing';
import {PublishingService} from '../publishing.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-publishing-create',
  templateUrl: './publishing-create.component.html',
  styleUrls: ['./publishing-create.component.css']
})
export class PublishingCreateComponent implements OnInit {
  publishingForm: FormGroup;
  publishing: IPublishing;
  message: boolean ;

  constructor(
    private publishingService: PublishingService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.publishingForm = this.fb.group({
      id: '',
      name: ['', [ Validators.required, Validators.minLength(1) ]]
    });
  }
  onSubmit() {
    if (this.publishingForm.valid) {
      const {value} = this.publishingForm;
      this.publishing = value;
      this.publishingService.createPublishing(this.publishing).subscribe(
        next => {console.log(next);
                 this.message = true;
                 this.ngOnInit();
        }
      );
    } else {
      console.log('error');
    }
  }

}
