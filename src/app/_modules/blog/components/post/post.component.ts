import { Component, Input } from '@angular/core';

import { IPost } from 'src/app/_models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input('model') model: IPost;
  showFullDescription = false;
}
