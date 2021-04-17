import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/_models/post';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent {
  @Input('model') model: IPost;
}
