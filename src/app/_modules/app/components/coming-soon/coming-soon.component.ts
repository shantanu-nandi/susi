import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { SubscriberService } from 'src/app/_services/subscriber.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent {
  subscriptionForm: FormGroup = new FormGroup({
    'email': new FormControl('', [
      Validators.required,
      Validators.email
    ]),
  });

  constructor(
    private service: SubscriberService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  onSubmit() {
    if (!this.subscriptionForm.valid) 
      return;

    this.spinner.show();
    this.service.addSubscriber(this.email.value)
      .then(() => {
        this.email.setValue('');
        this.spinner.hide();
        this.toastr.success('Thank you for subscribing!');
      });
  }

  get email() { return this.subscriptionForm.get('email'); }
}
