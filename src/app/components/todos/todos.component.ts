import { Todo } from './../../models/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor() { }

  ngOnInit() {
    this.todos = [
      {id: 1, title: 'Todo one', complited: false},
      {id: 2, title: 'Todo two', complited: true},
      {id: 3, title: 'Todo three', complited: false}
    ];
  }

}
