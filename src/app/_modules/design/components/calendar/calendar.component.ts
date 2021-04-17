import { Component, OnInit, Input } from '@angular/core';
import { fullMonthNames, Day } from 'src/app/_helpers/date';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input('current') current = new Date();
  @Input('bg') bg = 'bg-primary';
  today = new Date();
  weeks: Date[][] = [];

  get fullYear() {
    return this.current.getFullYear();
  }

  get fullMonthName() {
    return fullMonthNames[this.current.getMonth()];
  }

  get daysInMonth() {
    return new Date(this.current.getFullYear(), this.current.getMonth() + 1, 0).getDate();
  }

  constructor() { }

  ngOnInit() {
    this.populate();
  }

  onPreviousYear() {
    this.current.setFullYear(this.current.getFullYear() - 1);
    this.weeks = [];
    this.populate();
  }

  onPreviousMonth() {
    this.current.setMonth(this.current.getMonth() - 1);
    this.weeks = [];
    this.populate();
  }

  onNextMonth() {
    this.current.setMonth(this.current.getMonth() + 1);
    this.weeks = [];
    this.populate();
  }

  onNextYear() {
    this.current.setFullYear(this.current.getFullYear() + 1);
    this.weeks = [];
    this.populate();
  }

  isToday(date: Date) {
    return (this.today.getDate() == date.getDate()
      && this.today.getMonth() == date.getMonth()
      && this.today.getFullYear() == date.getFullYear());
  }

  getCellClass(date: Date) {
    if(!date)
      return '';
    
    if(this.isToday(date))
      return `text-white ${this.bg}`;
    
    if(date.getDay() === Day.Sunday || date.getDay() === Day.Saturday)
      return 'font-weight-bold';
  }

  private populate() {
    const firstDayOfCurrentMonth = new Date(this.current.getFullYear(), this.current.getMonth(), 1);

    let week: Date[] = [];
    if(firstDayOfCurrentMonth.getDay() === Day.Sunday) {
      week.push(null, null, null, null, null, null);
    }
    else {
      for(let i = 1; i < firstDayOfCurrentMonth.getDay(); i++)
        week.push(null);
    }
 
    for(let i = 1; i <= this.daysInMonth; i++) {
      week.push(new Date(this.current.getFullYear(), this.current.getMonth(), i));
      if(week.length == 7) {
        this.weeks.push(week);
        week = [];
      }
    }

    if(week.length > 0) {
      while(week.length != 7)
        week.push(null);
      
      this.weeks.push(week);
    }
  }
}
