import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'components', loadChildren: () => import('../design/design.module').then(m => m.DesignModule) },
  { path: 'blog', loadChildren: () => import('../blog/blog.module').then(m => m.BlogModule) },
  { path: 'todo', loadChildren: () => import('../todo/todo.module').then(m => m.TodoModule) },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
