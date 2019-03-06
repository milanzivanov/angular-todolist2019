import { Todo } from './../../models/Todo';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  title: string;

  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const todo = {
      title: this.title,
      complited: false
    };

    this.addTodo.emit(todo);
    // clear input field
    this.title = '';

  }

}
