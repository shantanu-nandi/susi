import { Component } from '@angular/core';

import { ITag } from 'src/app/_models/tag';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent {
  tags: ITag[] = [
    { id: '1', name: 'Portfolio', isSelected: true },
    { id: '2', name: 'Typography', isSelected: true },
    { id: '3', name: 'Type', isSelected: true },
    { id: '4', name: 'Campaign', isSelected: true },
    { id: '5', name: 'Illustration', isSelected: true },
    { id: '6', name: 'Face', isSelected: true },
    { id: '7', name: 'Brand', isSelected: true },
    { id: '8', name: 'uiExperience', isSelected: true },
    { id: '9', name: 'Portfolio', isSelected: true },
    { id: '10', name: 'Typography', isSelected: true },
    { id: '11', name: 'Type', isSelected: true },
    { id: '12', name: 'Campaign', isSelected: true },
    { id: '13', name: 'Illustration', isSelected: true },
    { id: '14', name: 'Face', isSelected: true },
    { id: '15', name: 'Brand', isSelected: true },
    { id: '16', name: 'uiExperience', isSelected: true }
  ];

  getBadgeClass(tag: ITag) {
    return tag.isSelected ? 'badge-primary' : 'badge-light';
  }
}
