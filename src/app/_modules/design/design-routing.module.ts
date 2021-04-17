import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignComponent } from './components/design/design.component';
import { DigitalClockContainerComponent } from './components/digital-clock-container/digital-clock-container.component';
import { CalendarContainerComponent } from './components/calendar-container/calendar-container.component';
import { StopwatchContainerComponent } from './components/stopwatch-container/stopwatch-container.component';
import { CalculatorContainerComponent } from './components/calculator-container/calculator-container.component';
import { TableContainerComponent } from './components/table-container/table-container.component';
import { AnalogClockContainerComponent } from './components/analog-clock-container/analog-clock-container.component';
import { AlertContainerComponent } from './components/alert-container/alert-container.component';

const routes: Routes = [
  { 
    path: '', 
    component: DesignComponent,
    children: [
      { path: '', redirectTo: 'calendar', pathMatch: 'full' },
      { path: 'calendar', component: CalendarContainerComponent },
      { path: 'digital-clock', component: DigitalClockContainerComponent },
      { path: 'analog-clock', component: AnalogClockContainerComponent },
      { path: 'stopwatch', component: StopwatchContainerComponent },
      { path: 'calculator', component: CalculatorContainerComponent },
      { path: 'table', component: TableContainerComponent },
      { path: 'alert', component: AlertContainerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
