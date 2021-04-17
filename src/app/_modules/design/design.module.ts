import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { DesignRoutingModule } from './design-routing.module';
import { DesignComponent } from './components/design/design.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarContainerComponent } from './components/calendar-container/calendar-container.component';
import { DigitalClockComponent } from './components/digital-clock/digital-clock.component';
import { DigitalClockContainerComponent } from './components/digital-clock-container/digital-clock-container.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { StopwatchContainerComponent } from './components/stopwatch-container/stopwatch-container.component';
import { CalculatorContainerComponent } from './components/calculator-container/calculator-container.component';
import { TableContainerComponent } from './components/table-container/table-container.component';
import { AnalogClockContainerComponent } from './components/analog-clock-container/analog-clock-container.component';
import { AlertComponent } from './components/alert/alert.component';
import { AlertContainerComponent } from './components/alert-container/alert-container.component';
import { AnalogClockComponent } from './components/analog-clock/analog-clock.component';




@NgModule({
  declarations: [
    DesignComponent,
    CalendarComponent,
    CalendarContainerComponent,
    DigitalClockComponent,
    DigitalClockContainerComponent,
    SideNavigationComponent,
    StopwatchContainerComponent,
    CalculatorContainerComponent,
    TableContainerComponent,
    AnalogClockContainerComponent,
    AlertComponent,
    AlertContainerComponent,
    AnalogClockComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DesignRoutingModule
  ]
})
export class DesignModule { }
