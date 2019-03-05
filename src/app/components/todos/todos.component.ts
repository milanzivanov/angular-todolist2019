import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => this.todos = todos);
  }

  // deliteTodo
  deliteTodo(todo: Todo) {
    // console.log('delite me');

    // delite ui
    this.todos = this.todos.filter(t => t.id !== todo.id);

    // delite on server
    this.todoService.deliteTodo(todo).subscribe();
  }

}
