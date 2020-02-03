import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TokenStorageService} from '../_services/token-storage.service';
import {AuthService} from '../_services/auth.service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  message: boolean;
  editProfileForm: FormGroup;

  constructor(private fb: FormBuilder,
              private token: TokenStorageService,
              private auth: AuthService) {
  }

  ngOnInit() {
    this.editProfileForm = this.fb.group({
      // tslint:disable-next-line:max-line-length
      phone: [this.token.getUser().phone, [Validators.required, Validators.pattern('^(0|\\+84)(\\s|\\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\\d)(\\s|\\.)?(\\d{3})(\\s|\\.)?(\\d{3})$')]],
      email: [this.token.getUser().email, [Validators.required, Validators.email]],
      address: [this.token.getUser().address, [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {
    const {value} = this.editProfileForm;
    this.auth.changeProfile({
      username: this.token.getUser().username,
      email: value.email,
      password: '123456',
      phone: value.phone,
      address: value.address
    }).subscribe(next => {
      const user = {
        id: this.token.getUser().id,
        username: this.token.getUser().username,
        email: next.email,
        roles: this.token.getUser().roles,
        address: next.address,
        phone: next.phone,
        accessToken: this.token.getToken()
      };
      window.sessionStorage.removeItem(USER_KEY);
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
      this.message = true;
    }, error => {
      console.log(error);
    });
  }
}
