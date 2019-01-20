import { Component } from '@angular/core';
import { ICard } from '../models/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  cards: ICard[] = [
    {
      imageUrl: '../../assets/angular.png',
      cardTitle: 'Angular',
      cardText: 'A complete solution to build Single Page Application.',
      features: ['Develop Across All Platforms', 'Speed & Performance', 'Incredible Tooling', 'Loved by Millions'],
      siteUrl: new URL('https://angular.io/')
    },
    {
      imageUrl: '../../assets/react.png',
      cardTitle: 'React',
      cardText: 'A JavaScript library for building user interfaces.',
      features: ['Develop Across All Platforms', 'Declarative', 'Component-Based', 'Learn Once, Write Anywhere'],
      siteUrl: new URL('https://reactjs.org/')
    },
    {
      imageUrl: '../../assets/nodejs.png',
      cardTitle: 'Node',
      cardText: 'JavaScript runtime to build scalable network applications.',
      features: ['Develop Across All Platforms', 'Asynchronous event driven', 'Single Threaded', 'Largest ecosystem of open source(NPM)'],
      siteUrl: new URL('https://nodejs.org/')
    }
  ]
}
