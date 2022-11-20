import { Injectable } from '@angular/core';
import { Todo, TodoListService } from './todo-list.service';

@Injectable()
export class TodoListPublicService implements TodoListService {
  getTodos(): Todo[] {
    // neu khai bao thieu thi se bi bao loi Interface ngay luc run-time
    const todos: Todo[] = [
      {
        title: 'get groceries',
        description: 'eggs, milk, etc.',
        done: false,
      },
    ];

    return todos;
  }

  /* getTask(): Todo[] {
    const todos: Todo[] = [
      {
        title: 'get groceries',
        description: 'eggs, milk, etc.',
        done: false,
      },
    ];

    return todos;
  } */
}
