import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deliteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

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
    // toggle on ui
    todo.complited = !todo.complited;
    // toggle on server
// tslint:disable-next-line: no-shadowed-variable
    this.todoService.toggleComplited(todo).subscribe((todo) => {
      return console.log(todo);
    });

  }

  onDelite(todo: Todo) {
    this.deliteTodo.emit(todo);
  }

}
