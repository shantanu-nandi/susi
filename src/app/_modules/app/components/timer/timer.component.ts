import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {
  counter = {
    days: 30,
    hours: 12,
    minutes: 47,
    seconds: 37
  };

  myInterval: any;

  constructor() { }

  ngOnInit() {
    this.myInterval = setInterval(() => this.tick(), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.myInterval);
  }

  tick() {
    let { days, hours, minutes, seconds } = this.counter;
    if(--seconds === 0) {
      seconds = 60;
      minutes--;
    }

    if(minutes === 0) {
      minutes = 60;
      hours--;
    }

    if(hours === 0) {
      hours = 24;
      days--;
    }

    if(seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
      clearInterval(this.myInterval);
    }

    this.counter.days = days;
    this.counter.hours = hours;
    this.counter.minutes = minutes;
    this.counter.seconds = seconds;
  }
}
