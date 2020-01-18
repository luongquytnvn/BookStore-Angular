import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {AppComponent} from '../../app.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private app: AppComponent,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(this.form);
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 1000);
      },
      err => {
        console.log(this.form);
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
