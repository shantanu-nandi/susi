import { Component } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent {
  navigationItems = [
    { text: 'Calendar', icon: 'calendar-week', routerLink: 'calendar'},
    { text: 'Digital Clock', icon: 'clock', routerLink: 'digital-clock'},
    { text: 'Analog Clock', icon: 'clock', routerLink: 'analog-clock'},
    { text: 'Stopwatch', icon: 'stopwatch', routerLink: 'stopwatch'},
    { text: 'Calculator', icon: 'calculator', routerLink: 'calculator'},
    { text: 'Table', icon: 'table', routerLink: 'table'},
    { text: 'Alert', icon: 'table', routerLink: 'alert'}
  ];

  filteredItems = this.navigationItems;

  onSearchChange(value: string) {
    this.filteredItems = !value ? this.navigationItems 
      : this.navigationItems.filter(item => item.text.toLowerCase()
        .includes(value.toLowerCase()));
  }
}
