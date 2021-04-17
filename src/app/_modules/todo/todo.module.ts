import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { SharedModule } from '../shared/shared.module';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [TodoComponent, TodoItemComponent, SidebarComponent],
  imports: [
    CommonModule,
    SharedModule,
    TodoRoutingModule
  ]
})
export class TodoModule {
}