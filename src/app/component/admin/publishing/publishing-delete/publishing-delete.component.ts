import { Component, OnInit } from '@angular/core';
import {IPublishing} from '../IPublishing';
import {PublishingService} from '../publishing.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-publishing-delete',
  templateUrl: './publishing-delete.component.html',
  styleUrls: ['./publishing-delete.component.css']
})
export class PublishingDeleteComponent implements OnInit {
  publishing: IPublishing;

  constructor(
    private publishingService: PublishingService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.publishingService.getPublishing(id).subscribe(
      next => {
        this.publishing = next;
      },
      error => {
        this.publishing = null;
        console.log('error');
      }
    );
  }
  deletePublishing(id) {
    console.log(id);
    this.publishingService.deletePublishing(id).subscribe(
      next => {
        this.router.navigate(['publishing-list']);
      }
    );
  }

}
