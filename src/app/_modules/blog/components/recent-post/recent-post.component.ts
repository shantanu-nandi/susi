import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/_models/post';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-recent-post',
  templateUrl: './recent-post.component.html',
  styleUrls: ['./recent-post.component.scss']
})
export class RecentPostComponent implements OnInit {
  recentPosts: IPost[] = [];

  constructor(private _postService: PostService) {}

  ngOnInit() {
    this._postService.getRecentPosts()
      .subscribe(result => this.recentPosts = result);
  }
}
