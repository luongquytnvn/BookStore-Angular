import {Component, OnInit} from '@angular/core';
import {AuthorService} from '../author/author.service';
import {User} from '../../../user/user';
import {AuthService} from '../../../user/_services/auth.service';
import {TokenStorageService} from '../../../user/_services/token-storage.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {
  userList: User[] = [];
  content: string;

  constructor(private authService: AuthService,
              public token: TokenStorageService) {
  }

  ngOnInit() {
    this.authService.getUserList().subscribe(next => {
        this.userList = next;
      }, err =>
        (this.content = this.content = JSON.parse(err.error).message)
    );
  }

  deleteUser(idUser) {
    this.authService.deleteUser(idUser).subscribe(next => {
      console.log(next);
      this.ngOnInit();
    }, error => {
      console.log(error);
    });
  }
}
