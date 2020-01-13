import { Component, OnInit } from '@angular/core';
import {IPublishing} from '../IPublishing';
import {PublishingService} from '../publishing.service';

@Component({
  selector: 'app-publishing-list',
  templateUrl: './publishing-list.component.html',
  styleUrls: ['./publishing-list.component.css']
})
export class PublishingListComponent implements OnInit {
  publishingList: IPublishing[] = [] ;
  content: string;

  constructor(private publishingService: PublishingService) { }

  ngOnInit() {
    this.publishingService.getPublishingList().subscribe(next => {
      this.publishingList = next;
      console.log(this.publishingList);
    }),
      // tslint:disable-next-line:no-unused-expression
      err => {this.content = this.content = JSON.parse(err.error).message; };
  }

}
