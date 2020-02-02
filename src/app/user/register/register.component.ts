import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {AppComponent} from '../../app.component';
import {Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private app: AppComponent,
    private router: Router,
    private login: LoginComponent
  ) {
  }

  ngOnInit() {
  }
  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        if (data) {
          this.login.autoLogin({
            username: this.form.username,
            password: this.form.password
          });
        }
      },
      err => {
        console.log(this.form);
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  ngOnDestroy(): void {
    window.location.reload();
  }
}
