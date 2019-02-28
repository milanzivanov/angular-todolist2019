import { Todo } from './../../models/Todo';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  setClasses() {
    // tslint:disable-next-line:prefer-const
    let classes = {
      todo: true,
      'is-complete': this.todo.complited
    };

    return classes;

  }

  onToggle(todo: Todo) {
    todo.complited = !todo.complited;
    // console.log(todo.title);
  }

  onDelite(todo: Todo) {
    console.log(todo);
  }

}
