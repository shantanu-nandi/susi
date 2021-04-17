import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/_models/post';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-popular-post',
  templateUrl: './popular-post.component.html',
  styleUrls: ['./popular-post.component.scss']
})
export class PopularPostComponent implements OnInit {
  popularPosts: IPost[] = []
  
  constructor(private _postService: PostService) {}

  ngOnInit() {
    this._postService.getPopularPosts()
      .subscribe(result => this.popularPosts = result);
  }
}
