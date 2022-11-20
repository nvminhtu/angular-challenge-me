import { Injectable } from '@angular/core';

export interface Todo {
  title: string;
  description: string;
  done: boolean;
}

@Injectable()
export abstract class TodoListService {
  abstract getTodos(): Todo[];
  // abstract getTask(): Todo[];
  // vidu o class neu co nhung ham nay thi cac class implements bat buoc phai co
}
