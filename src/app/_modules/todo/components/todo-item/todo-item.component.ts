import { Component, Input } from '@angular/core';

import { ITodo, TodoStatus } from 'src/app/_models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input('model') model:ITodo;

  getItemStatus(): string {
    switch(this.model.status) {
      case TodoStatus.NotStarted:
        return 'Todo';
      case TodoStatus.InProgress:
        return 'Doing';
      case TodoStatus.Completed:
        return 'Done';
      case TodoStatus.Cancelled:
        return 'Cancelled';
      default:
        return '';
    }
  }

  getTitleClass(): string {
    switch(this.model.status) {
      case TodoStatus.NotStarted:
        return 'text-info';
      case TodoStatus.InProgress:
        return 'text-warning';
      case TodoStatus.Completed:
        return 'text-success';
      case TodoStatus.Cancelled:
        return 'text-warning';
      default:
        return '';
    }
  }

  getButtonClass(): string {
    switch(this.model.status) {
      case TodoStatus.NotStarted:
        return 'btn-primary';
      case TodoStatus.InProgress:
        return 'btn-primary';
      case TodoStatus.Completed:
        return 'btn-outline-primary';
      case TodoStatus.Cancelled:
        return 'btn-outline-primary';
      default:
        return '';
    }
  }
}
