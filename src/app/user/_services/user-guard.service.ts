import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {TokenStorageService} from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  constructor(private token: TokenStorageService,
              private router: Router) {
  }

  canActivate(): boolean {
    if (this.token.getToken()) {
      for (const role of this.token.getUser().roles) {
        if (role === 'ROLE_USER') {
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
