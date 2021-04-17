import { Component } from '@angular/core';
import { themeColors } from 'src/app/_models/color';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  categories = [
    { name: 'Personal', items: ['Fittness', 'Health & food diet', 'Meetings']},
    { name: 'Learning', items: ['Reading blogs', 'Meetups', 'Analysis design', 'Design revisit']},
    { name: 'Project', items: ['Client calls', 'Pending works', 'Completed works']},
  ];

  getThemeName(index: number): string {
    return themeColors[index % themeColors.length];
  }
}
