import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './components/blog/blog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CraetePostComponent } from './components/craete-post/craete-post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes: Routes = [
  { 
    path: '', 
    component: BlogComponent,
    children: [
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: 'posts', component: DashboardComponent },
      { path: 'posts/:id', component: PostDetailComponent },
      { path: 'create-post', component: CraetePostComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
