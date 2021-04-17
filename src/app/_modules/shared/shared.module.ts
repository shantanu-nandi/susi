import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";
import { IconModule } from '../icon/icon.module';
import { TruncatePipe } from 'src/app/_pipes/truncate.pipe';


@NgModule({
  declarations: [
    TruncatePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbDropdownModule,
    NgxSpinnerModule,
    IconModule,
    TruncatePipe
  ],
  providers: []
})
export class SharedModule { }
