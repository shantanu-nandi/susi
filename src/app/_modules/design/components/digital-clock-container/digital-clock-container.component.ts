import { Component } from '@angular/core';

@Component({
  selector: 'app-digital-clock-container',
  templateUrl: './digital-clock-container.component.html',
  styleUrls: ['./digital-clock-container.component.scss']
})
export class DigitalClockContainerComponent {
  colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
}
