import {Component, OnInit} from '@angular/core';

import {TokenStorageService} from '../_services/token-storage.service';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  constructor(
    private token: TokenStorageService,
    private app: AppComponent
  ) {
  }

  ngOnInit() {
    this.currentUser = this.token.getUser();
    console.log(this.token);
  }
}
