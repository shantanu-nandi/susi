import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { IPost } from 'src/app/_models/post';
import { AuthService } from 'src/app/_services/auth.service';
import { CategoryService } from 'src/app/_services/category.service';
import { ICategory } from 'src/app/_models/category';
import { PostService } from 'src/app/_services/post.service';


@Component({
  selector: 'app-craete-post',
  templateUrl: './craete-post.component.html',
  styleUrls: ['./craete-post.component.scss']
})
export class CraetePostComponent implements OnInit {
  categories: ICategory[];

  model: IPost = {
    tags: [],
    // createdBy: this.authService.afAuth.user.,
    createdDate: new Date().toString()
  };

  constructor(
    private _router: Router,
    private authService: AuthService,
    private categoryService: CategoryService,
    private _postService: PostService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.categoryService.getAll()
      .subscribe(result => this.categories = result);
  }

  onCategoryChange(categoryId: string) {
    const index = this.categories.findIndex(cat => cat.id === categoryId);
    this.model.category = index !== -1 ? this.categories[index] : null;
  }

  onEnter($event) {
    this.toastr.success('Hello world');
    const tags = $event.target.value.split(',');
    this.model.tags.push(...tags); 
    $event.target.value = ''
  }

  onSubmit() {
    this.model.thumbnailUrl = this.model.imageUrl;
    this._postService.create(this.model)
      .subscribe(() => this._router.navigate(['/blog']));
  }

  onCancel() {
    this._router.navigate(['/blog']);
  }

  remove(tag: string) {
    this.model.tags.splice(this.model.tags.indexOf(tag), 1);
  }
}
