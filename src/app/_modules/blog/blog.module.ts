import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './components/blog/blog.component';
import { PostComponent } from './components/post/post.component';
import { SharedModule } from '../shared/shared.module';
import { PostsComponent } from './components/posts/posts.component';
import { SurveyComponent } from './components/survey/survey.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { AdListComponent } from './components/ad-list/ad-list.component';
import { RecentPostComponent } from './components/recent-post/recent-post.component';
import { PopularPostComponent } from './components/popular-post/popular-post.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CraetePostComponent } from './components/craete-post/craete-post.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';


@NgModule({
  declarations: [
    BlogComponent, 
    PostComponent, 
    PostsComponent, 
    SurveyComponent, 
    SubscribeComponent, 
    CategoryListComponent, 
    TagListComponent,
    AdListComponent,
    RecentPostComponent, 
    PopularPostComponent, 
    PostPreviewComponent, 
    DashboardComponent, 
    CraetePostComponent, PlaceholderComponent, PostDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
