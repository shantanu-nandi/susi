import { Component, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/_services/auth.service';
import { Router, ChildActivationStart } from '@angular/router';
import { AppError } from 'src/app/_models/app-error';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup = new FormGroup({
    'name': new FormControl('', [
      Validators.required,
      Validators.maxLength(40)
    ]),
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
    private cdr: ChangeDetectorRef,
    private spinner: NgxSpinnerService
  ){}

  onSubmit() {
    if(!this.signupForm.valid) 
      return;

    this.spinner.show();
    const { email, password } = this.signupForm.value;
    this.authService.signUp(email, password)
      .then(() => this.onSuccess())
      .catch(err => this.onError(err));
  }

  private onSuccess() {
    this.spinner.hide();
    this.router.navigate(['/']);
  }

  private onError(error: AppError) {
    this.spinner.hide();
    console.log('error', error);
    this.signupForm.setErrors({ accountError: error.message });
    this.cdr.detectChanges();
  }

  get name() { return this.signupForm.get('name'); }

  get email() { return this.signupForm.get('email'); }

  get password() { return this.signupForm.get('password'); }

}
