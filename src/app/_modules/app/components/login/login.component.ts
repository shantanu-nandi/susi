import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from 'src/app/_services/auth.service';
import { AppError } from 'src/app/_models/app-error';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    'email': new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    'password': new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(40)
    ])
  });
  
  constructor(
    private authService: AuthService, 
    private router: Router,
    private spinner: NgxSpinnerService,
    private cdr: ChangeDetectorRef
  ){}

  onSubmit() {
    if(!this.loginForm.valid) 
      return;

    this.spinner.show();

    const { email, password } = this.loginForm.value;
    this.authService.login(email, password)
      .then(() => this.loginSuccess())
      .catch((err) => this.loginFailure(err));
  }

  onGoogleLogin() {
    this.spinner.show();

    this.authService.googleLogin()
      .then(() => this.loginSuccess())
      .catch((err) => this.loginFailure(err));
  }

  private loginSuccess() {
    this.spinner.hide();

    const redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
    this.authService.redirectUrl = '';
    this.router.navigate([redirectUrl]);
  }

  private loginFailure(error: AppError) {
    this.spinner.hide();
    
    this.loginForm.setErrors({ accountError: error.message });
    this.cdr.detectChanges();
  }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }

}