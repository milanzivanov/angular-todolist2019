import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return  [
      {id: 1, title: 'Todo one', complited: false},
      {id: 2, title: 'Todo two', complited: true},
      {id: 3, title: 'Todo three', complited: false}
    ];
  }
}
