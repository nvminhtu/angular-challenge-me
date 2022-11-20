import { TestBed } from '@angular/core/testing';

import { TodoListPrivateService } from './todo-list-private.service';

describe('TodoListPrivateService', () => {
  let service: TodoListPrivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoListPrivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
