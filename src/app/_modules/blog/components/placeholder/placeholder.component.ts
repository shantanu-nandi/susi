import { Component } from '@angular/core';

import { IPost } from 'src/app/_models/post';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent {
  model:IPost = {
    title: 'Getting Started with Angular: Your First App',
    description: 'This tutorial introduces you to the essentials of Angular by walking you through building a simple e-commerce site with a catalog, shopping cart, and check-out form. It uses the StackBlitz online development environment so you can get started right away.',
    category: {
      name: 'Design'
    },
    imageUrl: 'assets/placeholder.png',
    tags: ['Web Design', 'Web Development', 'Angular', 'HTML', '(S)CSS', 'Bootstrap'],
    createdBy: 'John Smith',
    createdDate: new Date().toString()
  }
}
