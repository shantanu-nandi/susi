import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent implements OnInit, OnDestroy {
  timerId: any;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.timerId = setTimeout(() => this.spinner.hide(), 1000);
  }

  ngOnDestroy() {
    clearTimeout(this.timerId);
  }

}
