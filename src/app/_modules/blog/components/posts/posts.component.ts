import { Component, Input } from '@angular/core';

import { IPost } from 'src/app/_models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  @Input('model') posts: IPost[] = [];
}
