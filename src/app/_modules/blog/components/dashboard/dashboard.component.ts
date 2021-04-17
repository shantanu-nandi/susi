import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IPost } from 'src/app/_models/post';
import { PostService } from 'src/app/_services/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  allPosts: IPost[];
  posts: IPost[] = [];
  
  constructor(
    private _router: Router,
    private _postService: PostService  
  ) { }

  ngOnInit() {
    this._postService.getAll()
      .subscribe(result => this.allPosts = this.posts = result);
  }

  onSearch($event) {
    const value = $event.target.value.toLowerCase();
    if(!value) {
      this.posts = this.allPosts;
      return;
    }

    this.posts = this.allPosts.filter(p => {
      return (p.title && p.title.toLowerCase().includes(value)) 
        || (p.category && p.category.name && p.category.name.toLowerCase().includes(value)) 
        || (p.createdBy.toLowerCase().includes(value) 
        || (p.tags && p.tags.includes(value)) 
        || (p.description.toLocaleLowerCase().includes(value)));
    });
  }

}
