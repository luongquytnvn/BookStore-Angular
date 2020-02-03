import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../_services/auth.service';
import {TokenStorageService} from '../_services/token-storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  message: boolean;
  changeForm: FormGroup;
  messageChange: string;

  constructor(private fb: FormBuilder,
              private auth: AuthService,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    this.changeForm = this.fb.group({
      oldPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.messageChange = '';
    const {value} = this.changeForm;
    console.log(value);
    this.auth.checkPassword({
      username: this.token.getUser().username,
      password: value.oldPassword
    }).subscribe(next => {
      console.log(next);
      this.auth.changePassword({
        username: this.token.getUser().username,
        password: value.newPassword
      }).subscribe(next1 => {
        this.message = true;
        console.log(next1);
      }, error1 => {
        console.log(error1);
      });
    }, error => {
      console.log(error);
      this.messageChange = 'Incorrect password';
    });
  }
}
