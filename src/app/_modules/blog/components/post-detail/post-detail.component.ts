import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/_services/post.service';
import { IPost } from 'src/app/_models/post';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  model: IPost = {};

  constructor(
    private _route: ActivatedRoute,
    private _postService: PostService
  ) { }

  ngOnInit() {
    const id = this._route.snapshot.params['id'];
    this._postService.get(id).subscribe(result => this.model = result);
  }

}
