import { Component, Input } from '@angular/core';
import { Url } from 'url';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() imageUrl: Url;
  @Input() cardTitle: string;
  @Input() cardText: string;
  @Input() features: string[];
  @Input() siteUrl: Url;
}
