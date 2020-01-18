import {Component} from '@angular/core';
import {TokenStorageService} from './user/_services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  isShow = false;

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router) {
  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  setIsShow(isShow: boolean) {
    this.isShow = isShow;
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
