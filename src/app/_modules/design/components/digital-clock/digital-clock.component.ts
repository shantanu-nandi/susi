import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit, OnDestroy {
  @Input('bg') bg = 'dark';

  day: number = 0;
  hour: number = 0;
  minute: number = 0;
  second: number = 0;

  clockInterval: any;

  constructor() { 
    this.resetClock();
  }

  ngOnInit() {
    this.clockInterval = setInterval(() => this.resetClock(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.clockInterval);
  }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }

  getDay(day: number) {
    return shortDays[day];
  }

  private resetClock() {
    const now = new Date();
    this.hour = now.getHours();
    this.minute = now.getMinutes();
    this.second = now.getSeconds();
    this.day = now.getDay();
  }
}

var shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
