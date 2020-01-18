import { Injectable } from '@angular/core';
import {TokenStorageService} from './token-storage.service';
import {CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(private token: TokenStorageService,
              private router: Router) { }
  canActivate(): boolean {
    if (this.token.getToken()) {
      for (const role of this.token.getUser().roles) {
        if (role === 'ROLE_ADMIN') {
          return true;
        }
      }
      this.router.navigate(['/home']);
      return false;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
