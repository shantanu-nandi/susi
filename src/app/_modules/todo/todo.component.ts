import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { ITodo, TodoStatus } from 'src/app/_models/todo';
import { themeColors } from 'src/app/_models/color';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  allTodos: ITodo[] = [
    { 
      id: "1", 
      title: "Add eggs and breads for preferably breakfast", 
      status: TodoStatus.Completed,
      category: 'Health & food diet',
      createdDate: new Date().toString()
    },
    { 
      id: "2", 
      title: "Go gym", 
      status: TodoStatus.NotStarted,
      category: "Fittness",
      createdDate: new Date().toString()
    },
    { 
      id: "3", 
      title: "Drink 3 liters water enough a day", 
      status: TodoStatus.NotStarted,
      createdDate: new Date().toString()
    },
    { 
      id: "4", 
      title: "Try at least one healthy Recipe per week", 
      status: TodoStatus.InProgress,
      createdDate: new Date().toString()
    },
    { 
      id: "5", 
      title: "Eat your Feuits Instead of junk foods", 
      status: TodoStatus.Completed,
      createdDate: new Date().toString()
    },
    { 
      id: "6", 
      title: "Cook at home more often", 
      status: TodoStatus.Cancelled,
      createdDate: new Date().toString()
    }
  ];
  todos:ITodo[];

  selectedItem: string;
  searchValue: string;

  constructor(private route: ActivatedRoute) {
    this.todos = this.allTodos;
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(paramMap => {
      this.selectedItem = paramMap.get('item') ;
      this.searchValue = '';
      this.filterTodos(); 
    });
  }

  onSearchCriteriaChange($event) {
    this.searchValue = $event.target.value;
    $event.target.value = '';
    this.filterTodos();
  }

  filterTodos() {
    this.todos = this.allTodos.filter(
      t => this.hasCategory(t, this.selectedItem) &&
        this.isSearchValueMatching(t, this.searchValue));
  }

  hasCategory(todo: ITodo, category: string) {
    if(!category) return true;

    return todo.category === category;
  }

  isSearchValueMatching(todo: ITodo, searchValue: string) {
    if(!searchValue) return true;

    return todo.title.includes(searchValue);
  }
}

