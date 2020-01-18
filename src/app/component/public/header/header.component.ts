import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../user/_services/token-storage.service';
import {CartComponent} from '../cart/cart.component';
import {AuthorService} from '../../admin/author/author.service';
import {CategoryService} from '../../admin/category/category.service';
import {LanguageService} from '../../admin/language/language.service';
import {PublishingService} from '../../admin/publishing/publishing.service';
import {ICategory} from '../../admin/category/ICategory';
import {ILanguage} from '../../admin/language/ILanguage';
import {IPublishing} from '../../admin/publishing/IPublishing';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  isShow = false;
  categoryList: ICategory[];
  languageList: ILanguage[];
  publishingList: IPublishing[];

  constructor(private tokenStorageService: TokenStorageService,
              private category: CategoryService,
              private language: LanguageService,
              private publishing: PublishingService) {
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
    this.category.getCategoryList().subscribe(next => (this.categoryList = next), error => (console.log(error)));
    this.language.getLanguageList().subscribe(next => (this.languageList = next), error => (console.log(error)));
    this.publishing.getPublishingList().subscribe(next => (this.publishingList = next), error => (console.log(error)));
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
